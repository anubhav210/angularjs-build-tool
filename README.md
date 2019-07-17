This build tool for angularjs which use basically **Grunt**(a script runner) to run a script file. the script uses 3 grunt plugin for making build.

1. grunt-ng-annotate - This is use for fix wrong dependency inject issue in js file.
2. grunt-contrib-concat -  This is use for concat all js file in one nonminified file.
3. grunt-contrib-uglify - used for uglify js file.


installation guide

1. first install node.js node package also include npm package.
2. install grunt globally using this command `npm install -g grunt-cli`
3. after install all dependencies which is define in package.json
4. run `grunt` in root directory of this repo which will run buildscript and put minified and non-minified script in dist folder.
