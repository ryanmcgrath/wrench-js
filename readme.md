wrench.js - Recursive file operations in Node.js
----------------------------------------------------------------------------
While I love Node.js, I've found myself missing some functions. Things like
recursively deleting/chmodding a directory (or even deep copying a directory)
shouldn't need to be re-invented time and time again.

That said, here's my attempt at a re-usable solution, at least until something
more formalized gets integrated into Node.js (*hint hint*). wrench.js is fairly simple
to use - check out the documentation/examples below:

Installation
-----------------------------------------------------------------------------

    npm install wrench

Usage
-----------------------------------------------------------------------------
    var wrench = require("./wrench");

    // Recursively delete the entire sub-tree of a directory, then kill the directory
    wrench.rmdirSyncRecursive("my_directory_name");

    // Recursively chmod the entire sub-tree of a directory
    wrench.chmodSyncRecursive("my_directory_name", 0755);

    // Deep-copy an existing directory
    wrench.copyDirSyncRecursive("directory_to_copy", "location_where_copy_should_end_up");

It should be noted that these are all currently synchronous operations. I'll be adding
asynchronous versions of chmod/copy in the near future, but rmdir is one that really can't
exist in an asynchronous fashion.

Questions, comments? Hit me up. (ryan [at] venodesigns.net | http://twitter.com/ryanmcgrath)
