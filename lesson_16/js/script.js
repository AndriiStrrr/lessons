document.addEventListener("click", function (e) {
  const targetElement = e.target;
  if (targetElement.closest(".menu-icon")) {
    document.documentElement.classList.toggle("menu-open");
  }
});

document.addEventListener("click", function (e) {
  const targetElement = e.target;
  if (targetElement.closest(".contacts-mid-header__icon")) {
    document.documentElement.classList.toggle("popup-phones");
  }
});
