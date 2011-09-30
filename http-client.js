var http = require('http'); // require the needed modules

// make the request object
var request = http.request({
    'host': 'sudarmuthu.com',
    'port': 80,
    'path': '/',
    'method': 'GET'
});

// assign callbacks
request.on('response', function (response) {
    console.log('Response Status Code: ' + response.statusCode);
    
    response.on('data', function (data) {
        console.log('Body: ' + data);
    });
});