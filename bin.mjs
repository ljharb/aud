#!/usr/bin/env node

import npx from 'libnpx';
import getLockfile from 'npm-lockfile/getLockfile';
import finder from 'find-package-json';
import semver from 'semver';
import colors from 'colors/safe.js';

import path from 'path';
import { existsSync } from 'fs';
import { copyFile, writeFile } from 'fs/promises';
import { execSync } from 'child_process';

import getProjectTempDir from './getProjectTempDir.js';

const { filename: pkg } = finder(process.cwd()).next();
const pkgDir = path.dirname(pkg);

const encoding = { encoding: 'utf-8' };

const root = execSync('npm root -g', encoding);

const NPM_PATH = path.join(root, 'npm', 'bin', 'npm-cli.js');

const argv = process.argv.slice(0, 2).concat('npm', 'audit', process.argv.slice(2));
const parsed = npx.parseArgs(argv, NPM_PATH);
const npmNeeded = '>=6';
const p = [`npm@${npmNeeded}`];
Object.assign(parsed, {
	p,
	package: p,
	packageRequested: false,
});

const hasPkgLock = existsSync(path.join(pkgDir, 'package-lock.json'));
const hasShrink = !hasPkgLock && existsSync(path.join(pkgDir, 'npm-shrinkwrap.json'));
const isFix = parsed.cmdOpts.indexOf('fix') > -1;

const npmV = execSync('npm --version', encoding).trim();
const npmIsGood = semver.satisfies(npmV, npmNeeded);

if (npmIsGood && (hasPkgLock || hasShrink || isFix)) {
	npx(parsed);
} else {
	if (!npmIsGood) {
		console.log(colors.blue(`npm is v${npmV}; we need ${npmNeeded}; installing npm in a temp dir...`));
	}
	Promise.all([
		getLockfile(pkg),
		getProjectTempDir({ npmNeeded }),
	]).then(async ([lockfile, tmpDir]) => {
		const lockfilePath = path.join(tmpDir, 'package-lock.json');
		const writtenLockfile = writeFile(lockfilePath, lockfile, encoding);
		const writtenPkg = copyFile(pkg, path.join(tmpDir, 'package.json'));
		const auditLevel = execSync(`npm config get audit-level --no-workspaces --prefix="${process.cwd()}"`, encoding).trim();
		const writtenRC = auditLevel && auditLevel !== 'undefined' ? writeFile(path.join(tmpDir, '.npmrc'), `audit-level=${auditLevel}`, encoding) : null;
		await Promise.all([writtenLockfile, writtenPkg, writtenRC]);
		return tmpDir;
	}).then((tmpDir) => {
		process.chdir(tmpDir);
		process.env.PATH = `${path.join(tmpDir, '../node_modules/.bin')}:${process.env.PATH}`;
		npx(parsed);
	}).catch((error) => {
		console.error(error);
		process.exit(error.code || 1);
	});
}
