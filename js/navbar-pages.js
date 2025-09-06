$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".coverNav").fadeIn(300);
    $(".navbarPart4").slideDown(300);
    $(".hamburger").hide();
    $("body").addClass("overflowHidden");
    $(".close-nav").show();
  });

  $(".coverNav").click(function () {
    $(".hamburger").show();
    $(".coverNav").fadeOut(300);
    $(".navbarPart4").slideUp(300);
    $("body").removeClass("overflowHidden");
    $(".close-nav").hide();
  });

  $(".close-nav").click(function (event) {
    event.stopPropagation();
    $(".hamburger").show();
    $(".coverNav").fadeOut(300);
    $(".navbarPart4").slideUp(300);
    $("body").removeClass("overflowHidden");
    $(".close-nav").hide();
  });
});
// //////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
  const $overlay = $(".overlay");

  function closeAllDropdowns() {
    $(".listBrowse, .listCategories, .listLocations")
      .removeClass("show")
      .hide();
    $(".listLinksProfile, .listNotifications").removeClass("active");
    $(".listItems").hide();
    $(".overlay").hide();
    $("body").css("overflow", "auto");
    $(".divBrowse").css("z-index", "0");
  }
  $(".overlay").on("click", function (e) {
    closeAllDropdowns();
  });
  // ================== Profile ==================
  $(".icon-profile").each(function () {
    const $container = $(this);
    const $button = $container.find("button");
    const $menu = $container.find(".listLinksProfile");

    $button.on("click", function (e) {
      e.stopPropagation();
      if ($menu.hasClass("active")) {
        closeAllDropdowns();
      } else {
        closeAllDropdowns();
        $menu.addClass("active");
        $overlay.show();
        $("body").css("overflow", "hidden");
      }
    });
  });

  $(".overlay .cancelIcon").on("click", function (e) {
    e.stopPropagation();
    closeAllDropdowns();
  });

  // ================== Notifications ==================
  $(".icon-notification").each(function () {
    const $container = $(this);
    const $btn = $container.find("button");
    const $list = $container.find(".listNotifications");

    $btn.on("click", function (e) {
      e.stopPropagation();
      if ($list.hasClass("active")) {
        closeAllDropdowns();
      } else {
        closeAllDropdowns();
        $overlay.show();
        $list.addClass("active");
      }
    });
  });

  // ================== Browse ==================
  $(".btnBrowse").on("click", function (event) {
    event.stopPropagation();

    const $container = $(this).closest(".divBrowse");
    const $listBrowse = $container.find(".listBrowse");

    if ($listBrowse.hasClass("show")) {
      closeAllDropdowns();
      $(".divBrowse").css("z-index", "0");
    } else {
      closeAllDropdowns();
      $listBrowse
        .css({ display: "flex", top: "-10px", opacity: 0 })
        .stop()
        .slideDown(100)
        .animate({ opacity: 1, top: "100%" }, 100)
        .addClass("show");
      $overlay.show();
      $(".divBrowse").css("z-index", "9999");
    }
  });

  // ================== Location ==================
  $(".btnLocation").click(function (event) {
    event.stopPropagation();

    const $container = $(this).closest(".divLocation");
    const $listLocations = $container.find(".listLocations");

    if ($listLocations.hasClass("show")) {
      closeAllDropdowns();
    } else {
      closeAllDropdowns();
      $listLocations.css("display", "block").addClass("show");
    }
  });

  // ================== Search ==================
  $(".fxHeaderForm input").on("keyup", function (e) {
    e.stopPropagation();
    let value = $(this).val().toLowerCase();
    let count = 0;

    $(".productItem").filter(function () {
      let match = $(this).text().toLowerCase().indexOf(value) > -1;
      $(this).toggle(match);
      if (match) count++;
    });

    $(".results span").text(count + " Results Found");

    if (value.trim() !== "" && count > 0) {
      closeAllDropdowns();
      $(".listItems").show();
      $overlay.show();
      $(".fxHeaderForm").css("z-index", "9999");
    } else {
      $(".listItems").hide();
      $(".fxHeaderForm").css("z-index", "0");
    }
  });

  $(".results button").on("click", function (e) {
    e.preventDefault();
    $(".listItems").hide();
    $(".fxHeaderForm input").val("");
    $overlay.hide();
    $(".fxHeaderForm").css("z-index", "0");
  });

  // ================== Document Click ==================
  $(document).click(function (event) {
    if (
      !$(event.target).closest(
        ".icon-profile, .icon-notification, .divBrowse, .divLocation, .fxHeaderForm, .overlay"
      ).length
    ) {
      closeAllDropdowns();
    }
  });
});
