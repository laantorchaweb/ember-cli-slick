import Ember from 'ember';

export default Ember.Controller.extend({
  breakpoints: [
    {
      'breakpoint': 1024,
      'settings': {
        'slidesToShow': 3,
        'slidesToScroll': 3,
        'infinite': true
      }
    },
    {
      'breakpoint': 600,
      'settings': {
        'slidesToShow': 2,
        'slidesToScroll': 2
      }
    },
    {
      'breakpoint': 480,
      'settings': {
        'slidesToShow': 1,
        'slidesToScroll': 1
      }
    }
  ],
  actions: {
    afterChange: function(slick, currentSlide) {
      window.console.log('afterChange', slick, currentSlide);
    }
  }
});
