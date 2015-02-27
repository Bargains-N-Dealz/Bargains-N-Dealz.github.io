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

  $("body").scrollspy({ target: '.navbar' })

  $(window).scroll(function(){

    if ($(this).scrollTop() > 500) {
      $('.scroll-top').attr('style','display:block !important');
    }
    else{
      $('.scroll-top').attr('style','display:none !important');
    }

  });

});

$('#home a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
$('#profile a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
$('#messages a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
$('#settings a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})



$(document).ready(function() {
  value = "#new-deals";
  var dealsJSON = 'js/json-files/new-deals.json';
  requestJSON(dealsJSON, function (data) {
    var json = data;
    statusHTML = "<div class='row text-center coupon-row'>";
    for(i = 0; i < json.length; i++)
    {

      if(i != 0 && i%3 === 0){
        statusHTML += '</div>';
        statusHTML += "<div class='row text-center coupon-row'>";
        statusHTML += '<div class="col-md-4">';
        statusHTML += '<img src="' + json[i].imageSource + '" alt="' + json[i].altTitle + '">';
        statusHTML += '</div>';

      }
      else{
        statusHTML += '<div class="col-md-4">';
        statusHTML += '<img src="' + json[i].imageSource + '" alt="' + json[i].altTitle + '">';
        statusHTML += '</div>';
      }
    }
    $("#new-deals").html(statusHTML);
    checkDevice();
  });
});

$( "ul.nav.nav-pills a" ).click(function() {
  var statusHTML;
  var statusJSON;
  statusActive = $("ul.nav.nav-pills li").hasClass("active");
  value = $(this).attr("href");
  switch(value){
    case "#new-deals":
      statusJSON = 'js/json-files/new-deals.json';
      break;
      case "#toys-games":
        statusJSON = 'js/json-files/toys.json';
        break;
        case "#clothing":
          statusJSON = 'js/json-files/clothing.json';
          break;
          case "#home":
            statusJSON = 'js/json-files/home-kitchen.json';
            break;
            case "#food":
              statusJSON = 'js/json-files/food.json';
              break;
              case "#health":
                statusJSON = 'js/json-files/health.json';
                break;
                case "#automotive":
                  statusJSON = 'js/json-files/automotive.json';
                  break;
                  case "#sports-outdoor":
                    statusJSON = 'js/json-files/sportsOutdoor.json';
                    break;
                    case "#electronics":
                      statusJSON = 'js/json-files/electronics.json';
                      break;
                      default:
                        console.log("Failure to grab JSON file!");
                      }
                      requestJSON(statusJSON, function (data) {
                        var json = data;
                        statusHTML = "<div class='row text-center coupon-row'>";
                        for(i = 0; i < json.length; i++)
                        {

                          if(i != 0 && i%3 === 0){
                            statusHTML += '</div>';
                            statusHTML += "<div class='row text-center coupon-row'>";
                            statusHTML += '<div class="col-md-4">';
                            statusHTML += '<img src="' + json[i].imageSource + '" alt="' + json[i].altTitle + '">';
                            statusHTML += '</div>';

                          }
                          else{
                            statusHTML += '<div class="col-md-4">';
                            statusHTML += '<img src="' + json[i].imageSource + '" alt="' + json[i].altTitle + '">';
                            statusHTML += '</div>';
                          }
                        }
                        switch(value){
                          case "#new-deals":
                            $("#new-deals").html(statusHTML);
                            break;
                            case "#toys-games":
                              $("#toys-games").html(statusHTML);
                              break;
                              case "#clothing":
                                $("#clothing").html(statusHTML);
                                break;
                                case "#home":
                                  $("#home").html(statusHTML);
                                  break;
                                  case "#food":
                                    $("#food").html(statusHTML);
                                    break;
                                    case "#health":
                                      $("#health").html(statusHTML);
                                      break;
                                      case "#automotive":
                                        $("#automotive").html(statusHTML);
                                        break;
                                        case "#sports-outdoor":
                                          $("#sports-outdoor").html(statusHTML);
                                          break;
                                          case "#electronics":
                                            $("#electronics").html(statusHTML);
                                            break;
                                            default:
                                              console.log("Could not display JSON images!");
                                            }
                                            couponMove();
                                            couponClick();
                                          });
                                        });


                                        function requestJSON(url, callback) {
                                          $.ajax({
                                            url: url,
                                            complete: function(xhr) {
                                              callback.call(null, xhr.responseJSON);
                                            }
                                          });
                                        }

                                        function couponMove(){
                                          $(".row.text-center.coupon-row img").hover(function(){
                                            $(this).stop(true, true).animate({ opacity: "1.0", height: "100%", width: "100%"}, "slow");
                                            $(this).css('position', 'relative');
                                          }, function() {
                                            $(this).stop(true, true).animate({ opacity:"0.7", height: "95%", width: "95%" }, "slow");
                                          });
                                        }

                                        function couponClick(){
                                          $(".row.text-center.coupon-row img").click(function(){
                                            var href = $(this).attr('src');
                                            var alt = $(this).attr('alt');
                                            popup = window.open();
                                            popup.document.write("<img src='" + href + "' alt='" + alt + "'>");
                                            popup.focus();
                                            window.setTimeout('popup.print()', 1000);
                                            setTimeout("popup.close()", 10000);
                                          });
                                        }

                                        function printPage(value){
                                          var href;
                                          var alt;
                                          var imageHTML = '<head></head><body id="whole-page-coupon" onload="fullPage.print()">';
                                          var fullPage = window.open();
                                          $(value).find('img').each(function() {
                                            href = $(this).attr('src');
                                            alt = $(this).attr('alt');
                                            imageHTML += "<img src='" + href + "' alt='" + alt + "'>";
                                          });
                                          imageHTML += "</body>";
                                          $(fullPage.document.body).html(imageHTML);
                                          window.setTimeout('fullPage.print();', 5000);
                                          //popup.focus();
                                          //$(document).ready(function () { popup.print(); });
                                        }

                                        function updateTabList(){
                                          // Get the dimensions of the viewport
                                          var width = $(window).width();
                                          var height = $(window).height();
                                          if (width <= 767){
                                            $( "ul.nav.nav-pills" ).addClass( "nav-stacked" );
                                          }
                                          else{
                                            $( "ul.nav.nav-pills" ).removeClass( "nav-stacked" );
                                          }
                                        };
                                        $(document).ready(updateTabList);    // When the page first loads
                                        $(window).resize(updateTabList);



                                        var isMobile = {
                                          Android: function() {
                                            return navigator.userAgent.match(/Android/i);
                                          },
                                          BlackBerry: function() {
                                            return navigator.userAgent.match(/BlackBerry/i);
                                          },
                                          iOS: function() {
                                            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                                          },
                                          Opera: function() {
                                            return navigator.userAgent.match(/Opera Mini/i);
                                          },
                                          Windows: function() {
                                            return navigator.userAgent.match(/IEMobile/i);
                                          },
                                          any: function() {
                                            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
                                          }
                                        };

                                        function checkDevice(){
                                          var width = $(window).width();
                                          console.log(width);
                                          if(isMobile.any()) {
                                            couponMove();
                                          }
                                          else{
                                            couponMove();
                                            couponClick();
                                          }
                                        }
