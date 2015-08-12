import Ember from 'ember';
import layout from '../templates/components/slick-slider';

export default Ember.Component.extend({
  layout: layout,

  _initializeSlick: Ember.on('didInsertElement', function() {
    var _this = this;

    return this.$().slick({});
  })
});
