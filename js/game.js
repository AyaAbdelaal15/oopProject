"use strict";
import { Ui } from "./ui.js";
import { Details } from "./details.js";
export class Games
{
    constructor ()
    {
        this.ui = new Ui();
        this.details = new Details();
        this.getDataGames("mmorpg");
        const links = document.querySelectorAll(".lists ul li a");
        for(let l = 0; l < links.length; l++)
            {
                links[l].addEventListener("click",(e) => {
                    e.preventDefault();
                    document.querySelector("a.active").classList.remove("active");
                    e.target.classList.add("active");
                    this.getDataGames(e.target.dataset.target)
                })
            }
    }
    async getDataGames(category)
    {
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '62ad219f90mshedb525cebd87675p120063jsn257822b777b2',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url,options);
        const result = await response.json();
        this.ui.displayData(result);
        this.clickCard();
        loading.classList.add("d-none");
    }
    catch (error) {
        console.log(error);
        loading.classList.remove("d-none");
    }
    }

    clickCard()
    {
        let cardDetail = document.querySelectorAll(".uiCard");
        for(let i = 0; i < cardDetail.length; i++)
            {
                cardDetail[i].addEventListener("click", (e) => {
                    const idCard = cardDetail[i].dataset.id;
                    this.details.showDetailsCard(idCard);
                })
            }
    }
}
