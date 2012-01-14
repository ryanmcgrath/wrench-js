var testCase = require('nodeunit').testCase;
var fs = require('fs');
var wrench = require('wrench');
var path = require('path');

module.exports = testCase({
    test_readdirSyncRecursive: function(test) {
        var dir = __dirname + '/readdir';

        test.equals(path.existsSync(dir), true, 'Folders should exist');

        var check = [
                'bar.txt',
                'foo',
                'foo/bar',
                'foo/dolor.md',
                'foo/lorem.txt',
                'foo/bar/ipsum.js'
            ];

        var files = wrench.readdirSyncRecursive(dir);

        test.equals(files.length, check.length, 'number of paths is correct');
        test.deepEqual(files, check, 'list shows all files and folders');

        test.done();
    }
});

// vim: et ts=4 sw=4
