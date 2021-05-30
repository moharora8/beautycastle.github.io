function main() {

}

$(document).ready(main);

$(document).ready(function() {

  var navOffset = $('nav').offset().top;

  $('nav').wrap('<div class="nav-placeholder"></div>');
  $('.nav-placeholder').height($('nav').outerHeight());
  $('nav').wrapInner('<div class="nav-inner"</div>');

  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop();

    if (scrollPos >= navOffset) {
      $('header').addClass('fixed');

    } else {
      $('header').removeClass('fixed');

    }
  })
});
