/*
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
$(document).ready(function() {
$('body').scrollspy({ target: '.navbar' })
});

$(document).ready(function() {
  $(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
      $('.scroll-top').attr('style','display:block !important');
    } else {
      $('.scroll-top').attr('style','display:none !important');
    }
  });
});

$(".coupon-row .col-md-4 img").hover(function(){
  $(this).stop(true, true).animate({ opacity: "1.0", height: "100%", width: "100%"}, "slow");
  $(this).css('position', 'relative');
}, function() {
  $(this).stop(true, true).animate({ opacity:"0.7", height: "95%", width: "95%" }, "slow");
});
