$(document).ready(function () {
  $("#cancelOrderBtn").click(function () {
    $(".overlayModal, .cancelOrderModal").fadeIn();
    $("body").css("overflow-y", "hidden");
  });

  $(".overlayModal,.cancelModal").click(function () {
    $(".overlayModal, .cancelOrderModal").fadeOut();
  });
});
