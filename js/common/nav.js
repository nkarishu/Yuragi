jQuery(function(){

  //slide menu
  $(function () {
    $(".gnav__about").hover(function () {
      $(this).children(".gnav__sublink").addClass('newnav');
    });
  });

  //smooth scroll
  $('#gnav').on('click', '.gnav__link', function () {
    const target = $(this).attr('href');
    const targetPos = $(target).offset().top;
    $('html, body').animate({
      'scrollTop': targetPos
    }, 800);
  });

});