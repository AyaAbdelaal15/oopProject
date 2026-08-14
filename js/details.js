"use strict";

import { Ui } from "./ui.js";

export class Details {
  constructor(id) {
    this.ui = new Ui();

    this.getCardDetail(id);
  }

  async getCardDetail(idCard) {
    const loading = document.querySelector(".loading");

    loading.classList.remove("d-none");

    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idCard}`;

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

      this.ui.displayDetailsCard(result);

      this.showDetails();

      this.hideDataCard();
    } catch (error) {
      console.error(error);

      this.ui.showError(
        "Unable to load game details. Please check your API key.",
      );

      this.closeDetails();
    } finally {
      loading.classList.add("d-none");
    }
  }

  showDetails() {
    const detailsCard = document.querySelector(".detailsCard");

    detailsCard.classList.add("show");

    document.body.style.overflow = "hidden";
  }

  hideDataCard() {
    const closeButton = document.querySelector(".closeDetail");

    if (!closeButton) {
      return;
    }

    closeButton.addEventListener("click", () => {
      this.closeDetails();
    });
  }

  closeDetails() {
    const detailsCard = document.querySelector(".detailsCard");

    detailsCard.classList.remove("show");

    document.body.style.overflow = "";
  }
}
