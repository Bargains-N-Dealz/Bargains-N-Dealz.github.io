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

$(document).on('touchstart mousemove', 'body', function(event){
  event.stopPropagation();
  if(event.handled !== true) {

    var y = event.pageY;
    if(y < 500){

      $('#scroll-button').removeClass('scroll-top page-scroll visible-xs visble-sm');
    }
    else
    $('#scroll-button').addClass('scroll-top page-scroll visible-xs visble-sm');


    event.handled = true;
  } else {
    return false;
  }
});
//Using jQuery for Facebook SDK
/*
$(document).ready(function() {
  $.ajaxSetup({ cache: true });
  $.getScript('//connect.facebook.net/en_UK/all.js', function(){
    FB.init({
      appId: '340608769461615',
    });
    $('#loginbutton,#feedbutton').removeAttr('disabled');
    FB.getLoginStatus(updateStatusCallback);
  });

  FB.Event.subscribe('edge.create', page_like_or_unlike_callback);
  FB.Event.subscribe('edge.remove', page_like_or_unlike_callback);
});

var page_like_or_unlike_callback = function(url, html_element) {
  console.log("page_like_or_unlike_callback");
  console.log(url);
  console.log(html_element);
}
*/
