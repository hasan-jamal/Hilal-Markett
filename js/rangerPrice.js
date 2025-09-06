const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress"),
  priceMinText = document.getElementById("price-min"),
  priceMaxText = document.getElementById("price-max");

let priceGap = 25;

// تحديث السعر المكتوب تحت (priceAmount)
function updatePriceAmount(min, max) {
  priceMinText.textContent = "$" + min;
  priceMaxText.textContent = "$" + max;
}

// لما أكتب في input (min أو max)
priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value) || 0,
      maxPrice = parseInt(priceInput[1].value) || 0;

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.classList.contains("input-min")) {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
      updatePriceAmount(minPrice, maxPrice);
    }
  });
});

// لما أحرّك السلايدر
rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.classList.contains("range-min")) {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      updatePriceAmount(minVal, maxVal);
    }
  });
});

updatePriceAmount(priceInput[0].value, priceInput[1].value);
