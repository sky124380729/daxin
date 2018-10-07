
function main() {

  (function () {
    'use strict';

    $('a.page-scroll').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 50
          }, 900);
          return false;
        }
      }
    });


    $('body').scrollspy({
      target: '.navbar-default',
      offset: 80
    });

    // Hide nav on click
    $(".navbar-nav li a").click(function (event) {
      // check if window is small enough so dropdown is created
      var toggle = $(".navbar-toggle").is(":visible");
      if (toggle) {
        $(".navbar-collapse").collapse('hide');
      }
    });


    // Nivo Lightbox 
    $('.portfolio-item a').nivoLightbox({
      effect: 'slideDown',
      keyboardNav: true,
    });

    // 悬浮窗口
    $(".yb_conct").hover(function () {
      $(".yb_conct").css("right", "5px");
      $(".yb_bar .yb_ercode").css('height', '200px');
    }, function () {
      $(".yb_conct").css("right", "-127px");
      $(".yb_bar .yb_ercode").css('height', '53px');
    });
    // 返回顶部
    $(".yb_top").click(function () {
      $("html,body").animate({
        'scrollTop': '0px'
      }, 300)
    });

  }());


}
main();