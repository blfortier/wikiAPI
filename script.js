/*global $*/

$(document).ready(function(){

    // Use a click function that calls the Wikipedia API and searches for the term entered by the user
    $("#search").click(function(){
      var searchTerm = $("#searchTerm").val();
      var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm + "&format=json&callback=?";
      
      // Perform an ajax request
      $.ajax({
        type:"GET",
        url: url,
        async: false,
        dataType: "json",
        // Upon success, display the search results using a for loop to iterate through the data
        success: function(data){          
         // Clear out previous search
         $("#results").html("");
        for(var i = 0; i < data[1].length; i++){
          $("#results").prepend("<a href = " + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p>");
        }
        },
        // Display an error message if there is an error
        error: function(errorMessage){
          $("#displayError").html("Sorry, there was an error.");
        }        
      });
   }); 
});