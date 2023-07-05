```javascript
// Importing necessary modules
const http = require('http');
const fs = require('fs');

// Creating a server
http.createServer(function (req, res) {
    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);

// Function to animate an element
function animateElement(elementId, animationName, duration) {
    const element = document.getElementById(elementId);
    element.style.animation = `${animationName} ${duration}s`;
}

// Animate an element with id 'myElement' using 'bounce' animation for 2 seconds
animateElement('myElement', 'bounce', 2);
```