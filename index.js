'use strict';

const path = require('path');
const fastbootTransform = require('fastboot-transform');
module.exports = {
  name: require('./package').name,

  blueprintsPath: function () {
    return path.join(__dirname, 'blueprints');
  },
  treeForVendor(defaultTree) {
    let trees = [];
    if (defaultTree) {
      trees.push(defaultTree);
    }
    var map = require("broccoli-stew").map;
    var Funnel = require("broccoli-funnel");
    const mergeTrees = require('broccoli-merge-trees');
    const assetDir = path.join(this.project.root, 'node_modules', 'slick-carousel', 'slick');
    const browserTrees = fastbootTransform(new Funnel(assetDir, {
      files: ['slick.js'],
      destDir: 'slick'
    }));
    trees.push(browserTrees);
    return new mergeTrees(trees);
  },
  included: function (app) {
    this._super.included(app);

    //app.import('node_modules/slick-carousel/slick/slick.js');
    app.import('node_modules/slick-carousel/slick/slick.css');
    app.import('node_modules/slick-carousel/slick/slick-theme.css');
    app.import('node_modules/slick-carousel/slick/fonts/slick.ttf', {destDir: 'assets/fonts'});
    app.import('node_modules/slick-carousel/slick/fonts/slick.svg', {destDir: 'assets/fonts'});
    app.import('node_modules/slick-carousel/slick/fonts/slick.eot', {destDir: 'assets/fonts'});
    app.import('node_modules/slick-carousel/slick/fonts/slick.woff', {destDir: 'assets/fonts'});
    app.import('node_modules/slick-carousel/slick/ajax-loader.gif', {destDir: 'assets'});
    app.import('vendor/slick/slick.js');

  }
};
