// index.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
// Requirements: jQuery must be loaded for this script to work.
// Author: Emily Valdez
// Date: 10 May 2025

$(document).ready(function () {
  // Append buttons
  $("#challenge").append("<button id='button-challenge'>Make Special</button>");
  $("#problems").append("<button id='button-problems'>Make Special</button>");
  $("#results").append("<button id='button-results'>Make Special</button>");

  // Add click listeners
  $("#button-challenge").click(function () {
    $("#challenge").toggleClass("special");
  });
  $("#button-problems").click(function () {
    $("#problems").toggleClass("special");
  });
  $("#button-results").click(function () {
    $("#results").toggleClass("special");
  });
});