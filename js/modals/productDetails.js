$(document).ready(function () {
  $(".eye-icon").click(function () {
    $("#productDetailsModal").fadeIn();
    $(".overlayModal").show();
    $("body").addClass("overflowHidden");

    if (
      !$(".productDetailsModal .imagesProducts").hasClass("slick-initialized")
    ) {
      $(".productDetailsModal .imagesProducts").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        vertical: true,
        verticalSwiping: true,
        prevArrow: $(".productDetailsModal .sliderAndImages .prevBtn"),
        nextArrow: $(".productDetailsModal .sliderAndImages .nextBtn"),
        focusOnSelect: true,
      });

      $(".productDetailsModal .imagesProducts").on(
        "init",
        function (event, slick) {
          let initialSlide = $(slick.$slides[slick.currentSlide]);
          let initialSrc = initialSlide.find("img").attr("src");
          $(".productDetailsModal .productImage").attr("src", initialSrc);
          $(".productDetailsModal .divImage").removeClass("active");
          $(slick.$slides[slick.currentSlide]).addClass("active");
        }
      );

      $(".productDetailsModal .imagesProducts").on(
        "afterChange",
        function (event, slick, currentSlide) {
          let activeSlide = $(slick.$slides[currentSlide]);
          let newSrc = activeSlide.find("img").attr("src");
          $(".productDetailsModal .productImage").attr("src", newSrc);
          $(".productDetailsModal .divImage").removeClass("active");
          $(slick.$slides[currentSlide]).addClass("active");
        }
      );

      $(".productDetailsModal .slick-current.slick-active").addClass("active");
    }
  });

  $(".overlayModal,.productDetailsModal .btnCloseModal").click(function () {
    $(".overlayModal, #productDetailsModal").fadeOut();
    $("body").removeClass("overflowHidden");
  });

  $(document).on("click", ".productDetailsModal .divImage", function () {
    let newSrc = $(this).find("img").attr("src");
    $(".productDetailsModal .productImage").attr("src", newSrc);
    $(".productDetailsModal .divImage").removeClass("active");
    $(this).addClass("active");
  });
});
