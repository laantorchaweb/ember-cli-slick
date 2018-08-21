import Ember from "ember";

const {
	Controller,
	Logger
} = Ember;

export default Controller.extend({
  breakpoints: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ],
  actions: {
    afterChange: function(slick, currentSlide) {
      Logger.log("afterChange", slick, currentSlide);
    }
  }
});
