const toggleMenu = e => {
  // Toggle the "menu--open" class on your menu refence.
  // Stop propagation so a click on this element is not a click on the body
  e.stopPropagation();
  // CSS ANIMATIONS, CHECK OUT LESS TO SEE CSS
  menu.classList.toggle("menu--open");

  // GSAP
  // if (menu.style.left === "0px") {
  //   TweenMax.to(menu, 1, {
  //     left: "-350px",
  //     delay: 0,
  //     ease: Elastic.easeOut
  //   });
  // } else {
  //   TweenMax.to(menu, 0.5, {
  //     left: 0,
  //     delay: 0,
  //     ease: Elastic
  //   });
  // }
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// add this line to stop clicking on the menu from clicking on the body
menu.addEventListener("click", e => e.stopPropagation());
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);

// const header = document.querySelector(".header");
// const articlesArea = document.querySelector(".articles");
// const anywhere = [header, articlesArea];
const body = document.querySelector("body");
body.addEventListener("click", () => {
  // GSAP
  // if (menu.style.left === "0px") {
  //   TweenMax.to(menu, 1, {
  //     left: "-350px",
  //     delay: 0,
  //     ease: Elastic.easeOut
  //   });
  // }

  if (Array.from(menu.classList).includes("menu--open")) {
    menu.classList.toggle("menu--open");
  }
});
