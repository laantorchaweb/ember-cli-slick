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
  }
};
