function showMenu() {
  const menu = document.querySelector(".nav__menu");
  const menuList = document.querySelector(".nav__list");
  const links = document.querySelectorAll(".nav__link");

  menu.addEventListener("click", function () {
    menuList.classList.toggle("nav__list--show");
  });

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      menuList.classList.remove("nav__list--show");
    });
  });

  // // sticky header
  // let header = document.querySelector("header");

  // header.classList.toggle("sticky", window.scrollY > 100);
}

export default showMenu;
