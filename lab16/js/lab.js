// index.js - Use jQuery to fetch and display API data
// Requirements: jQuery must be loaded for this script to work.
// Author: Emily Valdez
// Date: 4 June 2025

$(document).ready(function() {
  $("#activate").click(function () {

    $.ajax({
      url: "https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json",
      type: "GET",
      dataType: "json",
      success: function(data) {
        let comicObj = data;

        let title = comicObj.title;
        let imgUrl = comicObj.img;
        let altText = comicObj.alt;

        let outputHTML = `
          <h2>${title}</h2>
          <img src="${imgUrl}" alt="${altText}" title="${altText}">
          <p><em>${altText}</em></p>
        `;

        $("#output").html(outputHTML);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        $("#output").text("Error fetching comic: " + textStatus);
        console.log("Error:", textStatus, errorThrown);
      }
    });

  });
});
