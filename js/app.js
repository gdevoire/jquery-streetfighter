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
      playhadouken();
      $('.ryu-ready').hide();
      $('.ryu-throwing').show();
      $('.hadouken').finish().show().animate(
    {'left': '1100px'},
    500,
    function() {
      $(this).hide();
      $(this).css('left', '600px');
    });

  });

    $('.ryu').mouseup(function() {
      $('.ryu-throwing').hide();
      $('.ryu-ready').show();
    });

    $('body').keydown(function(x){
      if(event.which == 88) {
        $('.ryu-cool').show();
        $('.ryu-ready').hide();
        $('.ryu-throwing').hide();
        $('.ryu-still').hide();

      }
    });

    $('body').keyup(function(x){
      if(event.which == 88) {
        $('.ryu-cool').hide();
        $('.ryu-still').show();

      }
    });





});

    function playhadouken () {
      $('#hadouken-sound')[0].volume = 0.5;
      $('#hadouken-sound')[0].load();
      $('#hadouken-sound')[0].play();
    }
