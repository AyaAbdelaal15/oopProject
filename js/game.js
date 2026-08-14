"use strict";

import { Ui } from "./ui.js";
import { Details } from "./details.js";

export class Games {
  constructor() {
    this.ui = new Ui();

    this.getDataGames("mmorpg");

    const links = document.querySelectorAll(".lists ul li a");

    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("click", (e) => {
        e.preventDefault();

        const activeLink = document.querySelector(".lists ul li a.active");

        if (activeLink) {
          activeLink.classList.remove("active");
        }

        e.currentTarget.classList.add("active");

        const category = e.currentTarget.dataset.target;

        this.getDataGames(category);

        this.closeMobileMenu();
      });
    }
  }

  async getDataGames(category) {
    const loading = document.querySelector(".loading");

    loading.classList.remove("d-none");

    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;

    const options = {
      method: "GET",

      headers: {
        "x-rapidapi-key": "95a7099a3cmsh6ce1675feaf81b9p1dceadjsnbfdfd6e1fbf9",

        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const result = await response.json();

      if (!Array.isArray(result)) {
        throw new Error("Invalid API response.");
      }

      this.ui.displayData(result);

      this.clickCard();
    } catch (error) {
      console.error("Games API Error:", error);

      this.ui.showError(`Unable to load games. ${error.message}`);
    } finally {
      loading.classList.add("d-none");
    }
  }

  clickCard() {
    const cards = document.querySelectorAll(".uiCard");

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        const idCard = card.dataset.id;

        new Details(idCard);
      });
    });
  }

  closeMobileMenu() {
    const menu = document.querySelector(".ulLinks ul");

    if (menu && menu.classList.contains("listLinks")) {
      menu.classList.remove("listLinks");
    }
  }
}
