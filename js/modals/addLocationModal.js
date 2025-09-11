$(document).ready(function () {
  $(".openAddLocationModal").click(function () {
    $(".overlayModal, .addLocationModal").fadeIn();
    $("body").css("overflow-y", "hidden");
  });

  $(".overlayModal,#closeAddModal").click(function () {
    $(".overlayModal, .addLocationModal").fadeOut();
  });
});
