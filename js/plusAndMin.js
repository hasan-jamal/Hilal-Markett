$(document).ready(function () {
  $(".fxAddToCart").each(function () {
    let container = $(this);
    container.find(".btn-plus").click(function () {
      let quantitySpan = container.find(".quantity");
      let current = parseInt(quantitySpan.text());
      current += 1;
      quantitySpan.text(current + " Kg");
    });
    container.find(".btn-minus").click(function () {
      let quantitySpan = container.find(".quantity");
      let current = parseInt(quantitySpan.text());
      if (current > 1) {
        current -= 1;
        quantitySpan.text(current + " Kg");
      }
    });
  });
});
