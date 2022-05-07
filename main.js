let menu = document.getElementById("menu");
let actions = document.getElementById("actions");

menu.addEventListener("click", () => {
  hundlMenu();
});

function hundlMenu() {
  menu.classList.toggle("is-active");
  actions.classList.toggle("is-active");
}

let nav = document.querySelector("nav");
let home = document.querySelector(".home");

// My Props
let navHeight = nav.style.height;
let navPadding = nav.style.padding;

window.onscroll = function () {
  let windowH = window.scrollY;
  let navH = nav.offsetHeight; //height + padding + border
  let homeH = home.offsetHeight; //height + padding + border

  if (windowH > navH) {
    nav.style.height = "0";
    nav.style.padding = "0";
    if (windowH >= homeH) {
      nav.style.height = navHeight;
      nav.style.padding = navPadding;
      nav.style.position = "fixed";
      nav.style.boxShadow = "rgb(0 0 0 / 30%) -1px 2px 5px";
    } else {
      nav.style.position = "relative";
      nav.style.boxShadow = "none";
    }
  } else {
    nav.style.height = navHeight;
    nav.style.padding = navPadding;
  }
};
