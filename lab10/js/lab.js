// index.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
// Requirements: jQuery must be loaded for this script to work.
// Author: Emily Valdez
// Date: 14 May 2025

// Helper function to generate fake dialogue
function generateRandomText() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;

  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));

  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

// Add click event listener to the button
$("#make-convo").click(function () {
  // Call the helper function and save the result
  const newText = generateRandomText();

  // Append the result to the output div
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});

