// StartSlider 2
$(".SliderBanner").slick({
  arrows: false,
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 3000,
});

$(".SliderBanner").on("afterChange", function (event, slick, currentSlide) {
  $(".dots-SliderBanner div").removeClass("active");
  $(".dots-SliderBanner div").eq(currentSlide).addClass("active");
});

$(".dots-SliderBanner div").on("click", function () {
  var index = $(this).index();
  $(".SliderBanner").slick("slickGoTo", index);
});

$(".dots-SliderBanner div").first().addClass("active");

$(".prevBanner").on("click", function () {
  $(".SliderBanner").slick("slickPrev");
});

$(".nextBanner").on("click", function () {
  $(".SliderBanner").slick("slickNext");
});

//  End Slider 2
