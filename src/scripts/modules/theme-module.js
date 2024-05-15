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
      prevArrow:"<a href='#' class='slick-arrow slick-prev'><img src='assets/images/slick_left.png'></a>",
      nextArrow:"<a href='#' class='slick-arrow slick-next'><img src='assets/images/slick_right.png'></a>",
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
      prevArrow:"<a href='#' class='slick-arrow slick-prev'><img src='assets/images/slick_left.png'></a>",
      nextArrow:"<a href='#' class='slick-arrow slick-next'><img src='assets/images/slick_right.png'></a>",
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

    $('.testimonial-text-container-video-list').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow:"<a href='#' class='slick-arrow slick-prev'><img src='assets/images/slick_left.png'></a>",
      nextArrow:"<a href='#' class='slick-arrow slick-next'><img src='assets/images/slick_right.png'></a>",
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

  var _media_video = () => { 
    // Slick on Video Gallery - Testimonial video slider
    $('.media-video').click(function () {
    var videoSrc = $(this).data('video-src');
    $('#youtubeVideo').attr('src', videoSrc);
    console.log("dasd");
    });

    // Reset video source when modal is hidden
    $('#mediaVideoModal').on('hidden.bs.modal', function () {
        $('#youtubeVideo').attr('src', '');
    });
  }

  var _video_testimonials = () => { 
    $('.video-icon').click(function() {
      var videoSrc = $(this).data('video-src');
      var videoBlock = $(this).closest('.video-block');
      videoBlock.find('.image-wrapper').hide();
      videoBlock.find('.video-icon').hide();
      videoBlock.find('.video-block-title').hide();
      var iframe = videoBlock.find('iframe');
      iframe.attr('src', videoSrc);
      videoBlock.find('.iframe-container').show();
    });

    // Slick on Video Gallery - Testimonial video slider
    $('.video-test-btn').click(function () {
      var videoSrc = $(this).data('video-src');
      $('#youtubeVideoModalTest').attr('src', videoSrc);
      });
  
      // Reset video source when modal is hidden
      $('#videoModalTest').on('hidden.bs.modal', function () {
          $('#youtubeVideoModalTest').attr('src', '');
    });

  }


  var _faq_hub = () => { 
    var acc = document.getElementsByClassName("accordion"); 
    var i; 

    for (i = 0; i < acc.length; i++) { 
      acc[i].addEventListener("click", function() { 
        this.classList.toggle("active"); 
        var panel = this.nextElementSibling; 
        var sign = this.querySelector('.sign'); 
        if (panel.style.display === "block") { 
          panel.style.display = "none"; 
          sign.textContent = '+'; 
        } else { 
          panel.style.display = "block"; 
          sign.textContent = '-'; 
        } 
      }); 
    } 
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
    _media_video();
    _video_testimonials();
    _faq_hub();
  };

  return {
    init: init,
  };
})();

