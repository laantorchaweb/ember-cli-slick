/* jshint node: true */
'use strict';
var fs = require('fs');
var map = require('broccoli-stew').map;

const Funnel = require('broccoli-funnel');
const Merge = require('broccoli-merge-trees');
const fastbootTransform = require('fastboot-transform');
const path = require('path');
const existSync = require('exists-sync');

module.exports = {
  name: 'ember-cli-slick',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

   /**
   * Hook to read all browser specific libraries from bower and wrap them up with FastBoot check.
   * They by default are under the vendor tree.
   *
   * @param {Broccoli} tree
   */
  treeForVendor(tree) {
    let trees = [];

    if (tree) {
      trees.push(tree);
    }
    const app = this._findHost();
    const assetDir = path.join(this.project.root, app.bowerDirectory, 'slick-carousel', 'slick');

    if (existSync(assetDir)) {
      // Funnel the browser lib from bower with providing destDir as the lib (this is optional). If you don't
      // provide `destDir` it will default to `vendor/yourlib.js`. If you provide destDir it will default to:
      // `vendor/destDirName/yourlib.js`
      const browserTrees = fastbootTransform(new Funnel(assetDir, {
         files: ['slick.js'],
         destDir: 'slick'
       }));
       trees.push(browserTrees);
    }

    return new Merge(trees);
  },


  included: function(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/slick-carousel/slick/slick.css');
    app.import(app.bowerDirectory + '/slick-carousel/slick/slick-theme.css');
    app.import(app.bowerDirectory + '/slick-carousel/slick/fonts/slick.ttf', { destDir: 'assets/fonts' });
    app.import(app.bowerDirectory + '/slick-carousel/slick/fonts/slick.svg', { destDir: 'assets/fonts' });
    app.import(app.bowerDirectory + '/slick-carousel/slick/fonts/slick.eot', { destDir: 'assets/fonts' });
    app.import(app.bowerDirectory + '/slick-carousel/slick/fonts/slick.woff', { destDir: 'assets/fonts' });
    app.import(app.bowerDirectory + '/slick-carousel/slick/ajax-loader.gif', { destDir: 'assets' });

    // import the above library into vendor.js that was merged with the vendor trees. In browser the library will be eval'd and run
    // In fastboot, the library will not be eval'd
    app.import('vendor/slick/slick.js');
  }
};