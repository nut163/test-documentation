# CSS Animations with JavaScript

CSS animations make it possible to animate transitions from one CSS style configuration to another. They consist of two components, a style describing the CSS animation and a set of keyframes that indicate the start and end states of the animation's style, as well as possible intermediate waypoints.

Here is an example of a simple CSS animation created with JavaScript:

```javascript
// Get the element to animate
var element = document.getElementById("animate");

// Define the animation
var animation = element.animate([
  // keyframes
  { transform: 'translateX(0px)' }, 
  { transform: 'translateX(100px)' }
], { 
  // timing options
  duration: 1000,
  iterations: Infinity
});
```

In this example, the element with the ID "animate" will move 100 pixels to the right from its current position. The animation will take 1 second to complete and will repeat indefinitely.

You can control the animation using the `play`, `pause`, `reverse`, and `finish` methods:

```javascript
// Start the animation
animation.play();

// Pause the animation
animation.pause();

// Reverse the animation
animation.reverse();

// Finish the animation
animation.finish();
```

You can also listen for events to know when the animation starts, ends, or iterates:

```javascript
element.addEventListener('animationstart', function() {
  console.log('Animation started');
});

element.addEventListener('animationend', function() {
  console.log('Animation ended');
});

element.addEventListener('animationiteration', function() {
  console.log('Animation iterated');
});
```

This is just a basic introduction to CSS animations with JavaScript. For more complex animations, you can use libraries like [Animate.css](https://animate.style/) or [GSAP](https://greensock.com/gsap/).