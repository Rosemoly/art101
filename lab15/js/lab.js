// index.js - Use jQuery to fetch and display API data
// Requirements: jQuery must be loaded for this script to work.
// Author: Emily Valdez
// Date: 31 May 2025

$(document).ready(function () {
    $("#activate").click(function () {
        // Make an AJAX call to a test API
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts/1", // Example API
            method: "GET",
            dataType: "json",
            success: function (data) {
                // Option 1: Parse and show specific data
                let output = `<h3>${data.title}</h3><p>${data.body}</p>`;
                
                // Option 2: Show full JSON
                // let output = JSON.stringify(data, null, 2);

                $("#output").html(output);
            },
            error: function (xhr, status, error) {
                $("#output").html("<p>Something went wrong: " + error + "</p>");
            }
        });
    });
});
