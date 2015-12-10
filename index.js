/* jshint node: true */
'use strict';
var path = require('path');

module.exports = {
  name: 'ember-cli-slick',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included(app);
    this.app.import(app.bowerDirectory + '/slick-carousel/slick/slick.css');
    this.app.import(app.bowerDirectory + '/slick-carousel/slick/slick.js');
    this.app.import(app.bowerDirectory + '/slick-carousel/slick/slick-theme.css');
    this.app.import(app.bowerDirectory + '/slick-carousel/slick/fonts/slick.ttf', { destDir: 'assets/fonts' });
    this.app.import(app.bowerDirectory + '/slick-carousel/slick/fonts/slick.svg', { destDir: 'assets/fonts' });
    this.app.import(app.bowerDirectory + '/slick-carousel/slick/fonts/slick.eot', { destDir: 'assets/fonts' });
    this.app.import(app.bowerDirectory + '/slick-carousel/slick/fonts/slick.woff', { destDir: 'assets/fonts' });
    this.app.import(app.bowerDirectory + '/slick-carousel/slick/ajax-loader.gif', { destDir: 'assets' });
  }
};
