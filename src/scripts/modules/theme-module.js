AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    // private stuff
  };


  var _instafeed = () => {
    if ($('section.instagram-feed').length) {
      var feed = new Instafeed({
        accessToken: 'IGQWRNYUZAmY0I1V18zRnNvRGtiZAmQ0cmIwU3ZANbHNEOTVpVXdKNlVCaWdMZAW9MR3ZAzcnV3ZA2xDQjZAzNVBkaUhQRENPaV9zVnM3aU5OaVN2ZA3JEMTVxT2pxSlh6dV9JUXBWYm5pZAElia3BGSUNOOG53WkJ4YlZARMzQZD',
        template: '<div class="post image-wrapper"><a href="{{link}}" target="_blank"><img src="{{image}}"></a></div>',
        limit: 6
      });
      feed.run();
    }
  }

  var _video_gallery = () => {
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
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 991,
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
  }

  var _testimonials = () => {
    // Slick on Testimonials
    $('.testimonial-text-container').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow:"",
      nextArrow:"<a href='#' class='slick-arrow slick-next'><img src='/assets/images/slick_right.png'></a>",
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1024,
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
  }


  var _video_gallery_testimonial = () => { 
    // Slick on Video Gallery - Testimonial video slider
    $('.test-video-btn').click(function () {
    var videoSrc = $(this).data('video-src');
    $('#youtubeVideo').attr('src', videoSrc);
    });

    // Reset video source when modal is hidden
    $('#videoModal').on('hidden.bs.modal', function () {
        $('#youtubeVideo').attr('src', '');
    });
  }



  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
    _instafeed();
    _testimonials();
    _video_gallery();
    _video_gallery_testimonial();
  };

  return {
    init: init,
  };
})();

