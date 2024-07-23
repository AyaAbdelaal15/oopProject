"use strict";
import { Ui } from "./ui.js";
export class Details
{
    constructor(id)
    {
        this.ui = new Ui();
        this.getCardDetail(id);
    }
    async getCardDetail(idCard)
    {
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const urlIdCard = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idCard}`;
        const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '62ad219f90mshedb525cebd87675p120063jsn257822b777b2',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    try {
        const newData = await fetch(urlIdCard,options);
        const resultDetails = await newData.json();
        this.ui.displayDetailsCard(resultDetails);
        this.hideDataCard();
        loading.classList.add("d-none");
    }
    catch (error) {
        console.log(error);
        loading.classList.remove("d-none");
    }
    }

    showDetailsCard(idCard)
    {
        const details = new Details(idCard);
        document.querySelector(".detailsCard").style.height = "100vh";
        document.querySelector(".detailsCard").style.overflow = "visible";
        document.querySelector(".detailsCard").style.overflowY = "scroll";
        document.querySelector("body").style.overflow = "hidden";
    }
    hideDataCard()
    {
        document.querySelector(".closeDetail").addEventListener("click" , (e) => {
            document.querySelector(".detailsCard").style.height = "0vh";
            document.querySelector(".detailsCard").style.overflow = "hidden";
            document.querySelector("body").style.overflow = "visible";
        });
    }
}