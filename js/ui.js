"use strict";

export class Ui {
  displayData(result) {
    let cards = "";

    for (let i = 0; i < result.length; i++) {
      const game = result[i];

      const description = game.short_description
        ? game.short_description.split(" ").slice(0, 8).join(" ") + "..."
        : "No description available.";

      cards += `
                <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 uiCard"
                    data-id="${game.id}"
                >

                    <div class="gameCard">

                        <img
                            src="${game.thumbnail}"
                            class="gameImage"
                            alt="${game.title}"
                        >

                        <div class="cardBody">

                            <h5 class="cardTitle">
                                ${game.title}
                            </h5>

                            <span class="freeBadge">
                                FREE
                            </span>

                        </div>

                        <p class="gameDescription">
                            ${description}
                        </p>

                        <div class="cardFooter">

                            <span class="cardBadge">
                                ${game.genre || "N/A"}
                            </span>

                            <span class="cardBadge">
                                ${game.platform || "N/A"}
                            </span>

                        </div>

                    </div>

                </div>
            `;
    }

    document.querySelector(".cardsBox").innerHTML = cards;
  }

  displayDetailsCard(data) {
    const detailsCard = document.querySelector(".detailsCard");

    detailsCard.innerHTML = `

            <div class="container">

                <div class="topDetail">

                    <div class="titleDetail">
                        <h2>Details Game</h2>
                    </div>

                    <button
                        class="closeDetail"
                        type="button"
                        aria-label="Close details"
                    >
                        <i class="fa-solid fa-xmark"></i>
                    </button>

                </div>


                <div class="detailsContain">

                    <div class="imgContain">

                        <img
                            src="${data.thumbnail}"
                            alt="${data.title}"
                        >

                    </div>


                    <div class="textDetail">

                        <h3>
                            Title:
                            ${data.title}
                        </h3>


                        <p class="txt">
                            Category:

                            <span>
                                ${data.genre}
                            </span>
                        </p>


                        <p class="txt">
                            Platform:

                            <span>
                                ${data.platform}
                            </span>
                        </p>


                        <p class="txt">
                            Status:

                            <span>
                                ${data.status}
                            </span>
                        </p>


                        <p class="texts">
                            ${data.description}
                        </p>


                        <div class="links">

                            <a
                                href="${data.game_url}"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Show Game
                            </a>

                        </div>

                    </div>

                </div>

            </div>
        `;
  }

  showError(message) {
    document.querySelector(".cardsBox").innerHTML = `

            <div class="col-12">

                <div class="apiError">

                    <h3>
                        Something went wrong
                    </h3>

                    <p>
                        ${message}
                    </p>

                </div>

            </div>
        `;
  }
}
