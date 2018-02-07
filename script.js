var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

 
    var element = $('#join');
    var element_height = element.outerHeight();
    var element_top_position = element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      element.addClass('in-view');
    } else {
      element.removeClass('in-view');
    }

}

/*$(window).scroll(function(){
check_if_in_view();*/
$(document).ready(function(){
  console.log($(window).scrollTop());
  $('#join').addClass('in-view');
  
});

$(window).scroll(function(){
  if($(window).scrollTop()>30)
  {
    $('#c-name').fadeOut('slow');
  }
  else
  {
    $('#c-name').fadeIn();
  }

});


