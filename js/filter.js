$(document).ready(function () {
  $("#btnFilterList").click(function () {
    if ($("#filter").is(":visible")) {
      $("#filter").animate(
        {
          width: "0",
          height: "0",
          opacity: 0,
        },
        100,
        function () {
          $(this).hide();
        }
      );
    } else {
      $("#filter")
        .css({
          display: "flex",
          width: "0",
          height: "0",
          opacity: 0,
        })
        .animate(
          {
            width: "100%",
            height: "100%",
            opacity: 1,
          },
          100
        );
    }
  });

  $(".btnCloseFilter").click(function () {
    $("#filter").animate(
      {
        width: "0",
        height: "0",
        opacity: 0,
      },
      100,
      function () {
        $(this).hide();
      }
    );
  });
});
///////////////////////////////////////////
