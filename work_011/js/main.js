$(function () {

  $('.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    infinite: true,
    nextArrow: '<button class="slick-arrow slick-next"><img src="/images/next.png"></button>',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="/images/previous.png"></button>',
    asNavFor: '.slider__small-inner'
  });

  $('.slider__small-inner').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider__inner',
    infinite: true,
    arrows: false,
    fade: false,
    centerMode: false,
    variableWidth: true,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 960,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  });

  $('.header__menu-btn').on('click', function () {
    $('.header__menu ul').slideToggle(650);
  });
  $(window).resize(function () {
    if ($(window).width() > 600) {
      $('.header__menu ul').removeAttr('style');
    }
  });

});