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
		t.equal(String(error).split('\n')[1], 'npm ERR! code EAUDITNOLOCK', 'error message has EAUDITNOLOCK');
		t.equal(stdout, '', 'no stdout output');
		t.equal(stderr.split('\n')[0], 'npm ERR! code EAUDITNOLOCK', 'stderr starts with expected error code');
	});
});
