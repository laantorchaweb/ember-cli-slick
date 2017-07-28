/* eslint-env node */
'use strict';
let path = require('path');
let mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-slick',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  treeForVendor: function(tree) {
    let slickAssets = path.join(this.project.nodeModulesPath, 'slick-carousel');

    tree = (tree) ? mergeTrees([ tree, slickAssets ]) : slickAssets;

    return tree;
  },

  included: function(app) {
    this._super.included(app);

    this.app.import('vendor/slick/slick.css');
    this.app.import('vendor/slick/slick.js');
    this.app.import('vendor/slick/slick-theme.css');
    this.app.import('vendor/slick/fonts/slick.ttf', { destDir: 'assets/fonts' });
    this.app.import('vendor/slick/fonts/slick.svg', { destDir: 'assets/fonts' });
    this.app.import('vendor/slick/fonts/slick.eot', { destDir: 'assets/fonts' });
    this.app.import('vendor/slick/fonts/slick.woff', { destDir: 'assets/fonts' });
    this.app.import('vendor/slick/ajax-loader.gif', { destDir: 'assets' });
  }
};
