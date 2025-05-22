// index.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.
// Requirements: jQuery must be loaded for this script to work.
// Author: Emily Valdez
// Date: 16 May 2025

function sortString(inputString) {
  return inputString.split('').sort().join('');
}

$("#submit").click(function(){
  const userName = $("#user-name").val();

  const userNameSorted = sortString(userName);

  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});



