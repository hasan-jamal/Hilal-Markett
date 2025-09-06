document.addEventListener("click", function (e) {
  const toggleContainer = e.target.closest("[data-toggle]");

  if (toggleContainer) {
    const outline = toggleContainer.querySelector(".icon-outline");
    const filled = toggleContainer.querySelector(".icon-filled");

    if (outline && filled) {
      outline.classList.toggle("hidden");
      filled.classList.toggle("hidden");
    }
  }
});
