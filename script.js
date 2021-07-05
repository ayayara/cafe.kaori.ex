$(function(){

  var pageTop = $('#page-top');
  pageTop.hide();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      pageTop.fadeIn(100);
    } else {
      pageTop.fadeOut(100);
    }
  });

  pageTop.click(function() {
    $('body, html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop' : position
    }, 500)
  });

});