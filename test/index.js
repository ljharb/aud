'use strict';

const path = require('path');
const { exec } = require('child_process');

const test = require('tape');

const cwd = process.cwd();

test('fix option', (t) => {
	t.plan(6);
	process.chdir(path.join(__dirname, '..'));
	exec('./bin.js fix', { encoding: 'utf-8' }, (error, stdout, stderr) => {
		process.chdir(cwd);

		t.ok(error, 'errors');
		t.ok(error.message.startsWith('Command failed: '), 'expected error message');
		t.equal(error.code, 1, 'error code is 1');
		t.match(String(error).split('\n')[1], /^npm ERR! code (EAUDITNOLOCK|ENOLOCK)$/, 'error message has EAUDITNOLOCK or ENOLOCK');
		t.equal(stdout, '', 'no stdout output');
		t.match(stderr.split('\n')[0], /^npm ERR! code (EAUDITNOLOCK|ENOLOCK)$/, 'stderr starts with expected error code');
	});
});
