const welcomeBtn = document.querySelector("#welcome-btn");
const welcomePage = document.querySelector(".welcome__page");
const gamePage = document.querySelector(".game__page");
const cells = document.querySelectorAll("#cell");

function gameDeckObject() {
  const gameDeck = { 1: ["0 0", "0 1", "0 2"], 2: ["1 0", "1 1", "1 2"], 3: ["2 0", "2 1", "2 2"] };

  return function () {
    gameDeck.forEach((row) => {
      Object.keys(gameDeck);
    });
  };
}

const gameDeck = { 1: ["0 0", "0 1", "0 2"], 2: ["1 0", "1 1", "1 2"], 3: ["2 0", "2 1", "2 2"] };

for (let key in gameDeck) {
  if (gameDeck.hasOwnProperty(key)) {
    // console.log(key);

    let a = gameDeck[key].indexOf("2 0");
    if (a !== -1) {
      console.log(key, a);
    }
  }
}

const initCell = function () {
  cells.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      console.log(e.target.dataset.x, e.target.dataset.y);
    });
  });
};

initCell();

welcomeBtn.addEventListener("click", () => {
  welcomePage.classList.add("invisible");
  gamePage.classList.remove("invisible");
  gamePage.classList.add("visible");
});
