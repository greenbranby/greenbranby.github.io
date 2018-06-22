$(document).ready(function () {


// $(".photo-overlay").onclick(function() {
//   $(this).toggleClass('hover');
// })
//
// $(".photo-overlay").on("mouseenter mouseleave touchstart", function(e){
//     if(e.type == 'touchstart') {
//       $(this).off('mouseenter mouseleave');
//     }
//
//     $(this).toggleClass("hover");

$(".skills-gd").on("mouseenter mouseleave touchstart", function(e){
    if(e.type == 'touchstart') {
      $(this).off('mouseenter mouseleave');
    }

    $(this).toggleClass("hover");

$(".skills").on("mouseenter mouseleave touchstart", function(e){
    if(e.type == 'touchstart') {
      $(this).off('mouseenter mouseleave');
    }

    $(this).toggleClass("hover");


}); //end ready
