const fs = require('fs');
const path = require('path');
const test = require('ava');
const binBuild = require('bin-build');

test('rebuild the pngquant binaries', async t => {
	const temporary = '/Users/raymondgu/Projects/Github';

	await binBuild.file(path.resolve(__dirname, 'vendor/source/pngquant-src.tar.gz'), [
		'rm ./INSTALL',
		`./configure --prefix="${temporary}"`,
		`make install BINPREFIX="${temporary}"`
	]);

	t.true(fs.existsSync(path.join(temporary, 'pngquant')));
});

