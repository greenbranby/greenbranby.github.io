$(document).ready(function () {
//
//
// $(".photo-overlay").onclick(function() {
//   $(this).toggleClass('hover');
// })

// $(".photo-overlay").on("mouseenter mouseleave touchstart", function(e){
//     if(e.type == 'touchstart') {
//       $(this).off('mouseenter mouseleave');
//     }
//
//     $(this).toggleClass("hover");

// $(".skills-gd").on("mouseenter mouseleave touchstart", function(e){
//     if(e.type == 'touchstart') {
//       $(this).off('mouseenter mouseleave');
//     }
//
//     $(this).toggleClass("hover");
//
// $(".skills").on("mouseenter mouseleave touchstart", function(e){
//     if(e.type == 'touchstart') {
//       $(this).off('mouseenter mouseleave');
//     }
//
//     $(this).toggleClass("hover");

let data = projects;

/*------------MEMBER  MODAL POP-UP --------*/

$(document).on('click ',  '.project-cards', function(e) {
    var i = $('.project-cards').index(this);
    console.log(i);
    //Get the index of the clicked member
    memberModal(data[i]);
  }); /
}); //end ready
