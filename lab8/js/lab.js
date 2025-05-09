// index.js - lab 8
// Author: Emily Valdez
// Date: 6 May 2025

// Create an array of numbers and assign it to a variable
var array = [2, 4, 6, 8, 10];

// Create a named function that will take a single parameter, do a calculation, and return the result
function squareNumber(x){
    var results = x * x;
    return results;
}

// Test your function with a few different numbers 
console.log(squareNumber(2));
console.log(squareNumber(5));
console.log(squareNumber(10));

// Use map with your named function
var squared = array.map(squareNumber);

// Use map with an anonymous function
var plusFive = array.map(function(x){
    var results = x + 5;
    return results;
});

// Set variable and show results
var mapResults = array.map(squareNumber);

// Function to write results to the page
function displayResults(label, dataArray) {
    var outputDiv = document.getElementById("output");
    var paragraph = document.createElement("p");
    paragraph.textContent = label + ": " + dataArray.join(", ");
    outputDiv.appendChild(paragraph);
}

// Display all results
displayResults("Original array", array);
displayResults("Squared results", squared);
displayResults("Plus five results", plusFive);
displayResults("Map results (squared)", mapResults);
