"use strict";

import { Games } from "./game.js";

new Games();

const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 180) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
});

const menuButton = document.querySelector(".iconMenu");

const menu = document.querySelector(".ulLinks ul");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("listLinks");
});
