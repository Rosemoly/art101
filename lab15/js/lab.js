// index.js - Use jQuery to fetch and display API data
// Requirements: jQuery must be loaded for this script to work.
// Author: Emily Valdez
// Date: 31 May 2025

    // Add a click event to the button
    $("#activate").click(function () {
        
      $.ajax({
        // The URL for the request (from the API docs)
        url: "https://yesno.wtf/api",
        // The data to send (none needed for this API)
        data: {},
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType: "json",
        // What do we do when the API call is successful
        success: function(data) {
          // Option 1: parse the JSON data
          let answer = data.answer;
          let gif = data.image;

          // Display the answer and the gif in the output div
          $("#output").html(`<p>The universe says: <strong>${answer.toUpperCase()}</strong></p>
                             <img src="${gif}" alt="answer gif">`);
        },
        // What we do if the API call fails
        error: function (jqXHR, textStatus, errorThrown) { 
          $("#output").text("Something went wrong: " + textStatus);
          console.log("Error:", textStatus, errorThrown);
        }
      });

    });

