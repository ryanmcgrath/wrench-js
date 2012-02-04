var testCase = require('nodeunit').testCase;
var fs = require('fs');
var wrench = require('../lib/wrench');
var path = require('path');
var _und = require("underscore");

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
        for (var filename in files) {
                test.ok(_und.include(check, files[filename]));
        }

        test.done();
    }
});

// vim: et ts=4 sw=4
