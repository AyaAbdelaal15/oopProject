"use strict";
export class Ui{
    displayData(result){
        let card = ``;
        for(let i =0; i<result.length; i++)
            {
                card += 
                `
                <div class="col-xl-3 col-lg-4 col-md-6 col-12 uiCard" data-id="${result[i].id}">
                <div>
                    <div class="card bg-dark text-light" style="width: 18rem;">
                        <img src="${result[i].thumbnail}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${result[i].title}</h5>
                        <span>free</span>
                        </div>
                        <p class="card-text text-center opacity-50 pargCard px-2">${result[i].short_description.split(" ",7)}</p>
                        <ul class="list-group list-group-flush bg-dark text-light">
                        <li class="list-group-item bg-dark text-light">
                            <span class="btnCard">${result[i].genre}</span>
                            <span class="btnCard">${result[i].platform}</span>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                `
            }
            document.querySelector(".cardsBox").innerHTML = card
    }
    displayDetailsCard(data)
    {
        let setDetails = ``
                setDetails += 
                `
                <div class="container">
            <div class="topDeltail">
                <div class="titleDetail">
                    <h2>Details Game</h2>
                </div>
                <div class="closeDetail">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div>
            <div class="detailsContain">
                <div class="imgContain">
                    <img src="${data.thumbnail}" alt="Detail Image">
                </div>
                <div class="textDetail">
                    <h3>Title: ${data.title}</h3>
                    <p class="txt">Category: <span style="text-transform:uppercase;">${data.genre}</span></p>
                    <p class="txt">Platform: <span>${data.platform}</span></p>
                    <p class="txt">Status: <span>${data.status}</span></p>
                    <p class="texts">${data.description}</p>
                    <div class="links">
                        <a href="${data.game_url}">Show Game</a>
                    </div>
                </div>
            </div>
        </div>
                `
            document.querySelector(".detailsCard").innerHTML = setDetails
    }
}