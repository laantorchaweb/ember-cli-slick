# ember-cli-slick

`ember-cli-slick` is a component that wraps the Slick Slider plugin functionality.

### Installation

From inside your ember-cli project, run the following:

```bash
ember install ember-cli-slick
```

#### Installation for ember-cli 0.1.5 - 0.2.2

```bash
ember install:addon ember-cli-slick
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

####Init Event
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


## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
