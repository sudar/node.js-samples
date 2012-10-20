/**
 * To run this sample, you need to have johnny-five node module installed. You can do `npm install johnny-five`
 *
 * Also connect a LED on pin 13 of Arduino and connect the Arduino to the computer.
 */

var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function() {

  // Create an Led on pin 13 and strobe it on/off
  (new five.Led(13)).strobe(1000);

});
