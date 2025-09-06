$(document).ready(function () {
  $(".btnOutline-black").click(function () {
    $(".overlay, .boxQuote").fadeIn();
    $("body").css("overflow-y", "hidden");
  });

  $(".close-btn, .overlay, #cancel").click(function () {
    $(".overlay, .boxQuote").fadeOut();
  });
});
