$(document).ready(function () {

$("[data-menu-underline-from-center] a").addClass("underline-from-center");

$("a.social").on("mouseenter mouseleave touchstart", function(e){
    if(e.type == 'touchstart') {
      $(this).off('mouseenter mouseleave');
    }

    $(this).toggleClass("hover");
});


$("a.button").on("mouseenter mouseleave touchstart", function(e){
    if(e.type == 'touchstart') {
      $(this).off('mouseenter mouseleave');
    }

    $(this).toggleClass("hover");
});


    function toggleImage(e) {
      if (e.type == "touchstart") {
        link.removeEventListener("mouseenter", toggleImage);
        link.removeEventListener("mouseleave", toggleImage);
      }

      link.classList.toggle("hover");
    }
// Scroll Animations
let $animation_elements = $('.animation-element');
let $window = $(window);

//an event handler that listens for the scroll event
$window.on('scroll', check_if_in_view);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}


}); //end ready
