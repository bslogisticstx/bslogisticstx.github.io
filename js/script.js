$(function(){
  smoothScrol(1200);
  
  $('.carousel').carousel({
  interval: false
});

  $.fn.extend({
    animateCss: function (animationName){
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      this.addClass('animated ' + animationName).one(animationEnd, function() {
          $(this).removeClass('animated ' + animationName);
      });
    }
  });

  $('#truck').animateCss('fadeInRight');
});

function smoothScrol(time){
  $('a[href^="#"]').on('click', function(event){
    var target = $( $(this).attr('href'));

    if ( target.length ){
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, time);
    }
  });
}
