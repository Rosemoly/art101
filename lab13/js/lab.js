// index.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.
// Requirements: jQuery must be loaded for this script to work.
// Author: Emily Valdez
// Date: 24 May 2025

function fizzBuzzBoom() {
  let oneLongString = "";

  for (let num = 1; num <= 200; num++) {
      let str = "";

      if (num % 3 === 0) str += "Fizz";
      if (num % 5 === 0) str += "Buzz";
      if (num % 7 === 0) str += "Boom";

      if (str === "") {
          str = num;  // if no match, just print the number
      } else {
          str = num + " " + str + "!";  // add number before message
      }

      oneLongString += str + "<br>";
  }

  $("#output").html(oneLongString);
}

// Call the function
fizzBuzzBoom();
