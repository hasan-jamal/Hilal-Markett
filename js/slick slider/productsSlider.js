$(document).ready(function () {
  $(".productDetailsPage .imagesProducts").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    prevArrow: $(".productDetailsPage .sliderAndImages .nextBtn"),
    nextArrow: $(".productDetailsPage .sliderAndImages .prevBtn"),
    focusOnSelect: true,
  });

  $(".productDetailsPage .divImage").on("click", function () {
    let newSrc = $(this).find("img").attr("src");
    $(".productDetailsPage .productImage").attr("src", newSrc);
    $(".productDetailsPage .divImage").removeClass("active");
    $(this).addClass("active");
  });

  $(".productDetailsPage .imagesProducts").on(
    "afterChange",
    function (event, slick, currentSlide) {
      let activeSlide = $(slick.$slides[currentSlide]);
      let newSrc = activeSlide.find("img").attr("src");
      $(".productDetailsPage .productImage").attr("src", newSrc);
      $(".productDetailsPage .divImage").removeClass("active");
      $(slick.$slides[currentSlide]).addClass("active");
    }
  );

  $(".productDetailsPage .imagesProducts").on("init", function (event, slick) {
    let initialSlide = $(slick.$slides[slick.currentSlide]);
    let initialSrc = initialSlide.find("img").attr("src");
    $(".productDetailsPage .productImage").attr("src", initialSrc);
    $(".productDetailsPage .divImage").removeClass("active");
    $(slick.$slides[slick.currentSlide]).addClass("active");
  });
  $(".productDetailsPage .slick-current.slick-active").addClass("active");
  $(".productDetailsPage .imagesProducts").slick("slickInit");
});
////////////////////////////////////////////////////////////////////////
