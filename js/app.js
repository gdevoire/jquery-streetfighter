$(document).ready(function() {
    $('.ryu').mouseenter(function() {
      $('.ryu-still').hide();
      $('.ryu-ready').show();
    });

    $('.ryu').mouseleave(function() {
      $('.ryu-still').show();
      $('.ryu-ready').hide();
    });

  $('.ryu').mousedown(function() {
    //play hadouken sound
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').show();
    //  animate hadouken to the right of the screen
  });

  $('.ryu').mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });





  //   $('.ryu').mousedown(function() {
  //     //play hadouken sound
  //     $('.ryu-ready').hide();
  //     $('.ryu-throwing').show();
  //     $('.hadouken').show();
  //     // animate hadouken to the right of the screen
  // });





});
