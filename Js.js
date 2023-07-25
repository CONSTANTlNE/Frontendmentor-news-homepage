let mobile_menu_icon = document.querySelector(".menu");
let mobile_close_icon = document.querySelector(".menu__close");
let mobile_side_nav = document.querySelector(".sidebar__nav");

mobile_menu_icon.addEventListener("click", () => {
  mobile_side_nav.style.display = "block";
  mobile_close_icon.style.display = "block";
});
mobile_close_icon.addEventListener("click", () => {
  mobile_side_nav.style.display = "none";
  mobile_close_icon.style.display = "none";
});
