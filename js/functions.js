/*!
* Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
* Code licensed under the Apache License v2.0.
* For details, see http://www.apache.org/licenses/LICENSE-2.0.
*/

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(document).ready('body').on('click', '.page-scroll a', function(event) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});


// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});

//Popup Jquery function
$(document).ready(function() {
  setTimeout(function(){
  $('#mailchimp-button').click()
},1000);
});
//ScrollSpy Javascript function for navbar
$('body').scrollspy({ target: '.navbar' })

$( "body" ).bind( 'vmousedown vmousemove', function( event ) {
  var swipe_y = event.pageY;
  if(swipe_y < 500){

    $('#scroll_1').removeClass('scroll-top page-scroll visible-xs visble-sm');
  }
  else
  $('#scroll_1').addClass('scroll-top page-scroll visible-xs visble-sm');

});
