// wait until the document is fully loaded to run any functions
$(document).ready(function() {

  // create a modal/lightbox effect to change the main, large image to an enlarged image of the project
  $('.project-image').on('click', function() {

    // store the clicked project's html in a variable (const for ES6 not var!)
    const newImage = $(this).html();

    // change the html on the main container div so that it now shows the same image as was clicked on and fade in for a bit of character
    $('.main-container').html(newImage).fadeIn('slow');

  })

})
