// index.js - lab 6
// Author: Emily Valdez
// Date: 25 April 2025

// Define variables
myTransport = ["car", "bike", "bus", "walking"];

// create an object for my main ride
myMainRide = {
  make:   "Toyota",
  model:  "Camry",
  color:  "Silver",
  year:   2015,
  age: function() {
    return 2025 - this.year;
  }
};

// output
document.writeln("My transport methods: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");


// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
