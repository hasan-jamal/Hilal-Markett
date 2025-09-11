$(document).ready(function () {
  $("#deleteModalBtn").click(function () {
    $(".overlayModal, .deleteModal").fadeIn();
    $("body").css("overflow-y", "hidden");
  });

  $(".overlayModal,.cancelDeleteModal").click(function () {
    $(".overlayModal, .deleteModal").fadeOut();
  });
});
