// index.js - lab 7
// Author: Emily Valdez
// Date: 2 May 2025

// Create a function
function sortUserName() {
  var userName = window.prompt("Please enter your name:");
  console.log("userName =", userName);

  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  // join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;
}

// output
document.writeln("Oh hey, I've fixed your name: " + sortUserName() + "<br>");

 
