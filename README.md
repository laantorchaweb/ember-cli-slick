# ember-cli-slick

`ember-cli-slick` is a component that wraps the Slick Slider plugin functionality.

Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above


Installation
------------------------------------------------------------------------------

```bash
ember install ember-cli-slick
```

### slick-slider

```hbs
{{#slick-slider autoplay=true arrows=false}}
  <div class="box"> <img src="https://static2.businessinsider.com/image/4f3433986bb3f7b67a00003c/a-parasite-found-in-cats-could-be-manipulating-our-brains.jpg"> </div>
  <div class="box"> <img src="https://static2.businessinsider.com/image/4f3433986bb3f7b67a00003c/a-parasite-found-in-cats-could-be-manipulating-our-brains.jpg"> </div>
  <div class="box"> <img src="https://static2.businessinsider.com/image/4f3433986bb3f7b67a00003c/a-parasite-found-in-cats-could-be-manipulating-our-brains.jpg"> </div>
  <div class="box"> <img src="https://static2.businessinsider.com/image/4f3433986bb3f7b67a00003c/a-parasite-found-in-cats-could-be-manipulating-our-brains.jpg"> </div>
{{/slick-slider}}
```

### The Slick events will be send from the component to your controller or route
(the swipe event will send a `swiped` in order to prevent naming issues)

```hbs
{{#slick-slider	afterChange='afterChange'}}
  <div class="box"> <img src="https://static2.businessinsider.com/image/4f3433986bb3f7b67a00003c/a-parasite-found-in-cats-could-be-manipulating-our-brains.jpg"> </div>
  <div class="box"> <img src="https://static2.businessinsider.com/image/4f3433986bb3f7b67a00003c/a-parasite-found-in-cats-could-be-manipulating-our-brains.jpg"> </div>
  <div class="box"> <img src="https://static2.businessinsider.com/image/4f3433986bb3f7b67a00003c/a-parasite-found-in-cats-could-be-manipulating-our-brains.jpg"> </div>
  <div class="box"> <img src="https://static2.businessinsider.com/image/4f3433986bb3f7b67a00003c/a-parasite-found-in-cats-could-be-manipulating-our-brains.jpg"> </div>
{{/slick-slider}}
```

#### Init Event
A `slickInit` event may be bound from your template. This event is triggered after Ember's internal didInsertElement with a DOM reference to the newly created widget allowing direct manipulation of the DOM elements after creation.

```hbs
{{#slick-slider	slickInit="someInitAction"}}
  <div class="box"> <img src="https://static2.businessinsider.com/image/4f3433986bb3f7b67a00003c/a-parasite-found-in-cats-could-be-manipulating-our-brains.jpg"> </div>
  <div class="box"> <img src="https://static2.businessinsider.com/image/4f3433986bb3f7b67a00003c/a-parasite-found-in-cats-could-be-manipulating-our-brains.jpg"> </div>
  <div class="box"> <img src="https://static2.businessinsider.com/image/4f3433986bb3f7b67a00003c/a-parasite-found-in-cats-could-be-manipulating-our-brains.jpg"> </div>
  <div class="box"> <img src="https://static2.businessinsider.com/image/4f3433986bb3f7b67a00003c/a-parasite-found-in-cats-could-be-manipulating-our-brains.jpg"> </div>
{{/slick-slider}}
```

### The responsive configuration needs to be passed by a controller property

```hbs
{{#slick-slider	responsive=breakpoints}}
  <div class="box"> <img src="https://static2.businessinsider.com/image/4f3433986bb3f7b67a00003c/a-parasite-found-in-cats-could-be-manipulating-our-brains.jpg"> </div>
  <div class="box"> <img src="https://static2.businessinsider.com/image/4f3433986bb3f7b67a00003c/a-parasite-found-in-cats-could-be-manipulating-our-brains.jpg"> </div>
  <div class="box"> <img src="https://static2.businessinsider.com/image/4f3433986bb3f7b67a00003c/a-parasite-found-in-cats-could-be-manipulating-our-brains.jpg"> </div>
  <div class="box"> <img src="https://static2.businessinsider.com/image/4f3433986bb3f7b67a00003c/a-parasite-found-in-cats-could-be-manipulating-our-brains.jpg"> </div>
{{/slick-slider}}
```

```javascript
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
	]
});
```

### Customization
This widget supports the full range of slick-slider configuration options. The full list with descriptions can be found at the slick-slider homepage: http://kenwheeler.github.io/slick/

* accessibility
* adaptiveHeight
* autoplay
* autoplaySpeed
* arrows
* asNavFor
* appendArrows
* appendDots
* prevArrow
* nextArrow
* centerMode
* centerPadding
* cssEase
* customPaging
* dots
* draggable
* fade
* focusOnSelect
* easing
* edgeFriction
* infinite
* initialSlide
* lazyLoad
* mobileFirst
* pauseOnHover
* pauseOnDotsHover
* respondTo
* responsive
* rows
* slide
* slidesPerRow
* slidesToShow
* slidesToScroll
* speed
* swipe
* swipeToSlide
* touchMove
* touchThreshold
* useCss
* variableWidth
* vertical
* verticalSwiping
* rtl

## Repo

* `git clone` this repository
* `cd ember-cli-slick`
* `npm install`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## License
=======

This project is licensed under the [MIT License](LICENSE.md).
