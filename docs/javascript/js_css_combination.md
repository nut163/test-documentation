# JavaScript and CSS Combination

In this section, we will explore how JavaScript can be combined with CSS to create dynamic and interactive webpages. 

## Changing CSS with JavaScript

JavaScript can be used to manipulate CSS properties of HTML elements. Here's an example:

```javascript
document.getElementById("myElement").style.color = "blue";
```

In the above example, we are changing the text color of the HTML element with id "myElement" to blue.

## Creating Animations

JavaScript and CSS can be combined to create animations. Here's a simple example:

```javascript
var element = document.getElementById("myElement");
element.style.animationName = "myAnimation";
element.style.animationDuration = "2s";
```

In the above example, we are applying an animation named "myAnimation" to the HTML element with id "myElement". The duration of the animation is set to 2 seconds.

## Event Handling

JavaScript can be used to handle events, such as clicks or mouse movements, and change CSS properties based on these events. Here's an example:

```javascript
document.getElementById("myElement").addEventListener("click", function() {
  this.style.backgroundColor = "red";
});
```

In the above example, we are changing the background color of the HTML element with id "myElement" to red when it is clicked.

For more examples and detailed explanations, please refer to the example files: `serverless_example.js`, `css_animation_example.js`, and `js_css_combination_example.js`.