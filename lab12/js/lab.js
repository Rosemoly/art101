// index.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.
// Requirements: jQuery must be loaded for this script to work.
// Author: Emily Valdez
// Date: 21 May 2025

// Function to sort into a house based on name length
function sortingHat(str) {
  const length = str.length;
  const mod = length % 4;

  if (mod === 0) {
      return "Gryffindor";
  } else if (mod === 1) {
      return "Ravenclaw";
  } else if (mod === 2) {
      return "Hufflepuff";
  } else {
      return "Slytherin";
  }
}

// Add a click event listener to the button
document.getElementById("button").addEventListener("click", function() {
  const name = document.getElementById("input").value;
  const house = sortingHat(name);

  const outputDiv = document.getElementById("output");
  const para = document.createElement("p");
  para.textContent = "The Sorting Hat has sorted you into " + house + "!";
  para.style.fontWeight = "bold";
  para.style.fontSize = "18px";
  para.style.marginTop = "10px";

  outputDiv.appendChild(para);
});


