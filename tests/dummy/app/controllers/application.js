import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		afterChange: function(slick, currentSlide) {
			console.log('afterChange', slick, currentSlide);
		}	
	}
})