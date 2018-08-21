module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addAddonToProject('slick-carousel');
  }
};
