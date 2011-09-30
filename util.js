var util = require('util');

util.log("Hello") // logs the string with the timestamp

var a = {1: true, 2: false};

// quick debugging of varaibles especially objects, similar to print_r in PHP
console.log(util.inspect(a)); 