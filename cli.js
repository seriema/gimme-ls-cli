#!/usr/bin/env node
'use strict';

console.log('hi!');

var exec = require('child_process').exec;

exec('dir', function (error, stdout, stderr) {
	console.log(stdout);
	if (stderr) {
		console.error(stderr);
	}
	if (error !== null) {
		console.error(error);
	}
});
