AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    // private stuff

    const swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });

  };

  // Slick on Video Gallery
  $('.testimonials-container').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:"<a href='#' class='slick-arrow slick-prev'><img src='/assets/images/slick_left.png'></a>",
    nextArrow:"<a href='#' class='slick-arrow slick-next'><img src='/assets/images/slick_right.png'></a>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
  };

  return {
    init: init,
  };
})();

