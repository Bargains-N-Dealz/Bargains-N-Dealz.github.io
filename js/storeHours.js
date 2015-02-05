
$(document).ready(function() {
  var date = new Date();
  var hour = date.getHours();
  var day = date.getDay();
  var y;
  switch (day) {
    case 0:
      if ((hour > 9) && (hour < 19)){
        y = "<span style=\"color:#07ed11\"> Open</span>";
        $('#open-close7').html(y)
      }
      else
      y = "<span style=\"color:#fc4b1c\"> Closed</span>";
      $('#open-close7').html(y)
      break;
      case 1:
        if ((hour > 9) && (hour < 21)){
          y = "<span style=\"color:#07ed11\"> Open</span>";
          $('#open-close1').html(y)
        }
        else
        y = "<span style=\"color:#fc4b1c\"> Closed</span>";
        $('#open-close1').html(y)
        break;
        case 2:
          if ((hour > 9) && (hour < 21)){
            y = "<span style=\"color:#07ed11\"> Open</span>";
            $('#open-close2').html(y)
          }
          else
          y = "<span style=\"color:#fc4b1c\"> Closed</span>";
          $('#open-close2').html(y)
          break;
          case 3:
            if ((hour > 9) && (hour < 21)){
              y = "<span style=\"color:#07ed11\"> Open</span>";
              $('#open-close3').html(y)
            }
            else
            y = "<span style=\"color:#fc4b1c\"> Closed</span>";
            $('#open-close3').html(y)
            break;
            case 4:
              if ((hour > 9) && (hour < 21)){
                y = "<span style=\"color:#07ed11\"> Open</span>";
                $('#open-close4').html(y)
              }
              else
              y = "<span style=\"color:#fc4b1c\"> Closed</span>";
              $('#open-close4').html(y)
              break;
              case 5:
                if ((hour > 9) && (hour < 21)){
                  y = "<span style=\"color:#07ed11\"> Open</span>";
                  $('#open-close5').html(y)
                }
                else
                y = "<span style=\"color:#fc4b1c\"> Closed</span>";
                $('#open-close5').html(y)
                break;
                case  6:
                  if ((hour > 9) && (hour < 21)){
                    y = "<span style=\"color:#07ed11\"> Open</span>";
                    $('#open-close6').html(y)
                  }
                  else
                  y = "<span style=\"color:#fc4b1c\"> Closed</span>";
                  $('#open-close6').html(y)
                  break;
                }

                /*
                if ((date > 9) && (date < 20) && (day != 0)) {
                y = "<span style=\"color:#07ed11\">We're Open!</span>";
              } else {
              y = "<span style=\"color:#fc4b1c\">Sorry we're Closed.</span>";
            }
            document.getElementById("open-close").innerHTML = y;
            setTimeout(checkOpenStatus,15000);
            */
          });
