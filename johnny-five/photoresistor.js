/**
 * To run this sample, you need to have johnny-five node module installed. You can do `npm install johnny-five`
 *
 * Also connect a LED on pin 13 of Arduino and a LED on Analog pin 2. After that connect the Arduino to the computer.
 */

var five = require("johnny-five"),
    board, led, photoresistor;

board = new five.Board();
board.on("ready", function() {

  // Create a new `photoresistor` hardware instance.
  photoresistor = new five.Sensor({
    pin: "A2",
    freq: 250
  });

  led = new five.Led(13);

  // "read" get the current reading from the photoresistor
  photoresistor.on("read", function( err, value ) {
      if (value > 50) {
          led.on();
      } else {
          led.off();
      }
    console.log( value, this.normalized );
  });

  // Inject the `sensor` hardware into the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    pot: photoresistor
  });
});
