var http = require('http'); // require the http module

// create a server
http.createServer(function (req, res) {
    // call this function when a request is received
    
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    
    // send this as part of the response
    res.end('Hello World\n');
}).listen(1337, "127.0.0.1"); // listen on port 1337

// debug information
console.log('Server running at http://127.0.0.1:1337/');
