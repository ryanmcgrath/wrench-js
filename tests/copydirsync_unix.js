var testCase = require('nodeunit').testCase;
var fs = require('fs');
var wrench = require('../lib/wrench');
var path = require('path');

function checkResultHidden(test, files) {
    var check = [
        '.hidden',
        '.hidden.txt',
        'bar.txt',
        'foo',
        path.join('.hidden', 'dolor.md'),
        path.join('foo', 'bar'),
        path.join('foo', 'dolor.md'),
        path.join('foo', 'lorem.txt'),
        path.join('foo', 'bar', 'ipsum.js')
    ];

    test.deepEqual(files, check);
}

function checkResultShown(test, files) {
    var check = [
        'bar.txt',
        'foo',
        path.join('foo', 'bar'),
        path.join('foo', 'dolor.md'),
        path.join('foo', 'lorem.txt'),
        path.join('foo', 'bar', 'ipsum.js')
    ];

    test.deepEqual(files, check);
}

module.exports = testCase({
    test_copyDirSyncRecursiveHidden: function(test) {
        var dir = path.join(__dirname, 'shown');
        var testdir = path.join(__dirname, 'testdir');

        test.ok(path.existsSync(dir), 'Folders should exist');

        wrench.mkdirSyncRecursive(testdir, 0777);
        wrench.copyDirSyncRecursive(dir, testdir, { excludeHiddenUnix: false });

        var files = wrench.readdirSyncRecursive(testdir);

        checkResultHidden(test, files);

        wrench.rmdirSyncRecursive(testdir);

        test.done();
    },
    test_copyDirSyncRecursiveShown: function(test) {
        var dir = path.join(__dirname, 'shown');
        var testdir = path.join(__dirname, 'testdir');

        test.ok(path.existsSync(dir), 'Folders should exist');

        wrench.mkdirSyncRecursive(testdir, 0777);
        wrench.copyDirSyncRecursive(dir, testdir, { excludeHiddenUnix: true });

        var files = wrench.readdirSyncRecursive(testdir);

        checkResultShown(test, files);

        wrench.rmdirSyncRecursive(testdir);

        test.done();
    }
});

// vim: et ts=4 sw=4
