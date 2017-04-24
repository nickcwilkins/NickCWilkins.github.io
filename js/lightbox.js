// Adds image to overlay div in html 
var $image = $("<img>");

$("#lightbox").append($image);

//Click function, displays lightbox on click.
$("#homeImageHeader a").click(function(event) {
   event.preventDefault();
   
   var imageLocation = $(this).attr("href");
   $image.attr("src", imageLocation);
   $("#lightbox").show();
});



$("#lightbox").click(function () {
   $("#lightbox").hide();
});