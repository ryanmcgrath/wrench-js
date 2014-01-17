var testCase = require('nodeunit').testCase;
var fs = require('fs');
var wrench = require('../lib/wrench');
var path = require('path');

module.exports = testCase({
    test_rmdirSyncRecursive: function(test) {
        var dir = __dirname + '/_tmp/foo/bar';

        wrench.mkdirSyncRecursive(dir, 0777);

        test.equals(fs.existsSync(dir), true, 'Dir should exist - mkdirSyncRecursive not working?');

        wrench.rmdirSyncRecursive(dir);

        test.equals(fs.existsSync(dir), false, 'Dir should not exist now...');

        test.done();
    },
});

// vim: et ts=4 sw=4
