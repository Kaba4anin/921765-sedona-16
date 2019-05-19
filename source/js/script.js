var mainNavigation = document.querySelector(".main-nav");
var mainNavaigationItems = mainNavigation.querySelector(".main-nav__list");
var btnOpenNavigation = mainNavigation.querySelector(".main-nav__toggle--open");
var btnCloseNavigation = mainNavigation.querySelector(".main-nav__toggle--close");

mainNavigation.classList.remove("main-nav--nojs");

btnOpenNavigation.addEventListener("click", function() {

  if (mainNavaigationItems.classList.contains("hidden")) {

    mainNavaigationItems.classList.remove("hidden");

    btnOpenNavigation.classList.add("hidden");
    btnCloseNavigation.classList.remove("hidden");
  }
});

btnCloseNavigation.addEventListener("click", function() {

  if (!mainNavaigationItems.classList.contains("hidden")) {

    mainNavaigationItems.classList.add("hidden");

    btnOpenNavigation.classList.remove("hidden");
    btnCloseNavigation.classList.add("hidden");
  }
});
