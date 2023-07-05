// CSS Animation Example

// HTML structure
var htmlContent = `
<div id="animationBox" style="width: 100px; height: 100px; background: red;"></div>
`;

// Inject HTML into the body
document.body.innerHTML = htmlContent;

// Get the DOM element
var animationBox = document.getElementById('animationBox');

// Define the animation
var animation = animationBox.animate([
  // keyframes
  { transform: 'translateX(0px)' }, 
  { transform: 'translateX(300px)' }
], { 
  // timing options
  duration: 1000,
  iterations: Infinity
});

// Pause the animation initially
animation.pause();

// Add event listener to start the animation on click
animationBox.addEventListener('click', function() {
  if (animation.playState === 'running') {
    animation.pause();
  } else {
    animation.play();
  }
});