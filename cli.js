#!/usr/bin/env node
'use strict';

console.log('hi!');

var exec = require('child_process').exec;

var lss = process.platform === 'win32' ? 'dir' : 'ls';

exec(lss, function (error, stdout, stderr) {
	console.log(stdout);
	if (stderr) {
		console.error(stderr);
	}
	if (error !== null) {
		console.error(error);
	}
});
