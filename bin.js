#!/usr/bin/env node

'use strict';

const npx = require('libnpx');
const getLockfile = require('npm-lockfile/getLockfile');
const getProjectTempDir = require('npm-lockfile/getProjectTempDir');
const finder = require('find-package-json');
const promisify = require('util.promisify');

const path = require('path');
const { existsSync } = require('fs');
const writeFile = promisify(require('fs').writeFile);
const copyFile = promisify(require('fs-copy-file'));
const { execSync } = require('child_process');

const { filename: pkg } = finder(process.cwd()).next();
const pkgDir = path.dirname(pkg);

const encoding = { encoding: 'utf-8' };

const root = execSync('npm root -g', encoding);

const NPM_PATH = path.join(root, 'npm', 'bin', 'npm-cli.js');

const argv = process.argv.slice(0, 2).concat('npm', 'audit', process.argv.slice(2));
const parsed = npx.parseArgs(argv, NPM_PATH);
const npmNeeded = '^6';
const p = [`npm@${npmNeeded}`];
Object.assign(parsed, {
	p,
	package: p,
	packageRequested: false,
});

const hasPkgLock = existsSync(path.join(pkgDir, 'package-lock.json'));
const hasShrink = !hasPkgLock && existsSync(path.join(pkgDir, 'npm-shrinkwrap.json'));
const isFix = parsed.cmdOpts.indexOf('fix') > -1;

if (hasPkgLock || hasShrink || isFix) {
	npx(parsed);
} else {
	Promise.all([
		getLockfile(pkg, undefined, { npmNeeded }),
		getProjectTempDir({ npmNeeded }),
	]).then(([lockfile, tmpDir]) => {
		const lockfilePath = path.join(tmpDir, 'package-lock.json');
		const writtenLockfile = writeFile(lockfilePath, lockfile, encoding);
		const writtenPkg = copyFile(pkg, path.join(tmpDir, 'package.json'));
		const auditLevel = execSync('npm config get audit-level', encoding);
		const writtenRC = writeFile(path.join(tmpDir, '.npmrc'), `audit-level=${auditLevel}`, encoding);
		return Promise.all([writtenLockfile, writtenPkg, writtenRC]).then(() => tmpDir);
	}).then((tmpDir) => {
		process.chdir(tmpDir);
		npx(parsed);
	});
}
