$(document).ready(function() {
	// Adding click event listen listener to all buttons
     $("button").on("click", function() {
      // Grabbing and storing the data-sitcom property value from the button
      var gifs = $(this).attr("data-sitcom");

      // var apiKey = "0bbf9351ca1f4a548405bf65c44d41a1";

      // Constructing a queryURL to search Giphy using the sitcom name
      // var queryURL = "http://api.giphy.com/v1/gifs/search?q" + "&api_Key=0bbf9351ca1f4a548405bf65c44d41a1q=" +
      //   gifs + "&limit=20&offset=0&rating=G&lang=en";
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        gifs + "&api_key=dc6zaTOxFJmzC&limit=10";

      // Performing an AJAX request with the queryURL
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        // After data comes back from the request
        .done(function(response) {
          
          console.log(response);
          // storing the data from the AJAX request in the results variable
          var results = response.data;

          // Looping through each result item
          for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var sitcomDiv = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var sitcomImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            sitcomImage.attr("src", results[i].images.fixed_height.url);
            // sitcomImage.attr("src", results[i].images.fixed_height.url);
            // var stillImage = $("src", results[i].images.fixed_height_still.url);
            // sitcomImage.attr("src", results[i].images.fixed_height_still.url);

            // Appending the paragraph and image tag to the sitcomDiv
            sitcomDiv.append(p);
            sitcomDiv.append(sitcomImage);

            // Prependng the sitcomDiv to the HTML page in the "#gifs-appear-here" div
            $("#gifs-appear-here").prepend(sitcomDiv);
          }
        
      });
    });

    // $(".gif").on("click", function() {
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      // var state = $(this).attr("data-state");
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
    //   if (state === "still") {
    //     $(this).attr("src", $(this).attr("data-animate"));
    //     $(this).attr("data-state", "animate");
    //   } else {
    //     $(this).attr("src", $(this).attr("data-still"));
    //     $(this).attr("data-state", "still");
       
    // Need to make buttons pause. Look in DevTools at the image object for url (fixed_height_still) but I need to find a way to use only one image url instead of one for each image.
    
