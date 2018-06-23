$(document).ready(function () {


$(".spin").on("mouseenter mouseleave touchstart", function(e){
    if(e.type == 'touchstart') {
      $(this).off('mouseenter mouseleave');
    }

    $(this).toggleClass("slide");
});

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

      link.classList.toggle("slide");
    }
}); //end ready
