// product gallery js 


if ($(window).width() < 768) {
  $('.product__gallery-items').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows:false
  });
}
if ($(window).width() > 769) {
  
  $('.product__gallery-items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product__small-images'
  });
  $('.product__small-images').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product__gallery-items',
    dots: false,
    centerMode: true,
    // variableWidth:true,
    arrows:false,
    focusOnSelect: true
  });
}

$('.gallery__image-top-items').slick({
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  // variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false
});
$('.gallery__image-bottom-items').slick({
  speed: 4000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: 'linear',
  slidesToShow: 1,              // Show multiple slides to ensure smooth marquee
  slidesToScroll: 1,
  // variableWidth: true,          // Enable variable width for natural slide sizing
  rtl: true,                    // Scroll from left to right
  infinite: true,
  arrows: false,
  buttons: false,
  pauseOnHover: false           // Prevent pausing on hover for continuous marquee
});
