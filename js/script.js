// ulWidth = 64px
// asideWidth = 70px
const menuBtn = document.querySelector(".menu-btn");
const aside = document.querySelector("aside");
const logoBox = document.querySelector(".logo");
const ul = document.querySelector("ul");
const menuItems = document.querySelectorAll(".menu-item");
const menuItemsText = document.querySelectorAll(".menu-text");
menuBtn.addEventListener("click", openMenu);

function openMenu() {
  menuBtn.firstElementChild.classList.toggle("open");
  menuBtn.lastElementChild.classList.toggle("open");

  aside.classList.toggle("menu-open");

  logoBox.classList.toggle("menu-open");

  ul.classList.toggle("menu-open");

  menuItems.forEach((menuItem) => {
    menuItem.classList.toggle("menu-open");
  });

  menuItemsText.forEach((menuItemText) => {
    menuItemText.classList.toggle("menu-open");
  });
}

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
    });
    item.classList.add("active");
  });
});
