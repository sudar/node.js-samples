var fs = require('fs'); // include the fs module

// Get stats about a file

console.log("Getting stats about a file");

fs.stat('./README.md', function (err, stats) {
    if (err) {
        // There was an error
        console.log("Something went wrong: " + err.message);
    } else {
        // Everything good so far
        console.log(stats);
    }        
});

// Reading the contents of a file

console.log("Reading the contents of a file");

fs.readFile('./README.md', function (err, data) {
    if (err) {
        // There was an error
        console.log("Something went wrong: " + err.message);
    } else {
        // Everything good so far
        console.log(data);
    }        
});