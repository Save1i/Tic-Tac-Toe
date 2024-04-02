const welcomeBtn = document.querySelector("#welcome-btn");
const welcomePage = document.querySelector(".welcome__page");
const gamePage = document.querySelector(".game__page");
const cells = document.querySelectorAll("#cell");
const infoZone = document.querySelector("#infoZone");
const infoZoneText = document.querySelector("#infoZoneText");

let gameDeck = { 1: [0, 1, 2], 2: [3, 4, 5], 3: [6, 7, 8] };
let firstPlayer = 0;

function gameDeckObject(dataX, cell) {
  let x = parseInt(dataX);
  for (let key in gameDeck) {
    if (gameDeck.hasOwnProperty(key)) {
      // console.log(key);

      let a = gameDeck[key].indexOf(x);
      if (a !== -1 && firstPlayer == 0) {
        gameDeck[key].splice(a, 1, "x");

        cell.classList.add("x");

        firstPlayer = 1;
        console.log(gameDeck);
      } else if (a !== -1 && firstPlayer == 1) {
        gameDeck[key].splice(a, 1, "o");

        cell.classList.add("o");

        firstPlayer = 0;
        console.log(gameDeck);
      }
    }
  }
  seeWhoWin();
}

// console.log(allStrings);

function seeWhoWin() {
  let allStrings = Object.keys(gameDeck).every((key) =>
    gameDeck[key].every((value) => typeof value === "string")
  );
  for (let key in gameDeck) {
    if (gameDeck.hasOwnProperty(key)) {
      // console.log(key);
      let a = gameDeck[key];
      let b = gameDeck;
      // console.log(a);
      // console.log(a[0]);
      if (
        (a[0] == "x" && a[1] == "x" && a[2] == "x") ||
        (b[1][0] == "x" && b[2][0] == "x" && b[3][0] == "x") ||
        (b[1][1] == "x" && b[2][1] == "x" && b[3][1] == "x") ||
        (b[1][2] == "x" && b[2][2] == "x" && b[3][2] == "x") ||
        (b[1][0] == "x" && b[2][1] == "x" && b[3][2] == "x") ||
        (b[1][2] == "x" && b[2][1] == "x" && b[3][0] == "x")
      ) {
        console.log("First player Win!");
        firstPlayer = 0;
        gameDeck = { 1: [0, 1, 2], 2: [3, 4, 5], 3: [6, 7, 8] };
        infoZone.classList.remove("invisible");
        infoZoneText.textContent = "Победил первый игрок!";
        setTimeout(() => {
          cells.forEach((cell) => {
            cell.classList.remove("x", "o");
            infoZone.classList.add("invisible");
          });
        }, 600);
      } else if (
        (a[0] == "o" && a[1] == "o" && a[2] == "o") ||
        (b[1][0] == "o" && b[2][0] == "o" && b[3][0] == "o") ||
        (b[1][1] == "o" && b[2][1] == "o" && b[3][1] == "o") ||
        (b[1][2] == "o" && b[2][2] == "o" && b[3][2] == "o") ||
        (b[1][0] == "o" && b[2][1] == "o" && b[3][2] == "o") ||
        (b[1][2] == "o" && b[2][1] == "o" && b[3][0] == "o")
      ) {
        console.log("Second player Win!");
        firstPlayer = 0;
        gameDeck = { 1: [0, 1, 2], 2: [3, 4, 5], 3: [6, 7, 8] };
        infoZone.classList.remove("invisible");
        infoZoneText.textContent = "Победил второй игрок!";
        setTimeout(() => {
          cells.forEach((cell) => {
            cell.classList.remove("x", "o");
            infoZone.classList.add("invisible");
          });
        }, 600);
      } else if (allStrings) {
        firstPlayer = 0;
        gameDeck = { 1: [0, 1, 2], 2: [3, 4, 5], 3: [6, 7, 8] };
        infoZone.classList.remove("invisible");
        infoZoneText.textContent = "Ничья";
        setTimeout(() => {
          cells.forEach((cell) => {
            cell.classList.remove("x", "o");
            infoZone.classList.add("invisible");
          });
        }, 600);
        let i = 0;
        console.log(i++);
        console.log("Ничья");
        allStrings = false;
      }
    }
  }
}

seeWhoWin();

// const gameDeck = { 1: ["0 0", "0 1", "0 2"], 2: ["1 0", "1 1", "1 2"], 3: ["2 0", "2 1", "2 2"] };

const initCell = function () {
  cells.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      // console.log(e.target.dataset.x, e.target.dataset.y);
      console.log(cell);
      gameDeckObject(e.target.dataset.x, cell);
    });
  });
};

initCell();

welcomeBtn.addEventListener("click", () => {
  welcomePage.classList.add("invisible");
  gamePage.classList.remove("invisible");
  gamePage.classList.add("visible");
});
