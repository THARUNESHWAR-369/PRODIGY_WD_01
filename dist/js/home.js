let menu_icon = document.getElementById("menu-icon");
let menu_close_icon = document.getElementById("menu-close-icon");
let menu_icon_dropdown = document.getElementById("menu-icon-dropdown");

menu_icon.addEventListener("click", () => {
    menu_icon_dropdown.classList.toggle("show-menu");
    menu_close_icon.classList.toggle("show-menu");
    menu_icon.classList.toggle("hide-menu");
});

menu_close_icon.addEventListener("click", () => {
    menu_icon_dropdown.classList.toggle("show-menu");
    menu_close_icon.classList.toggle("show-menu");
    menu_icon.classList.toggle("hide-menu");

});



/* Nav color change on scroll */

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $("header").css("background", "white");
    }
    else {
              $("header").css("background", "transparent");

    }
  });
});