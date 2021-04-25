// DOM Manipulation
const weaponChoice = document.querySelectorAll(".weapon");
const rockChoice = document.querySelector("#btn-rock");
const paperChoice = document.querySelector("#btn-paper");
const scissorsChoice = document.querySelector("#btn-scissors");
const userScore = document.querySelector("#user-score");
const houseScore = document.querySelector("#house-score");
const initialWeapons = document.querySelector("#play-container");
const whoPickedWhat = document.querySelector("#round-container");
const pickUser = document.querySelector("#pick-user");
const pickHouse = document.querySelector("#pick-house");
const rockImg = document.querySelector("#rock-img");
const paperImg = document.querySelector("#paper-img");
const scissorsImg = document.querySelector("#scissors-img");
const winnerMessage = document.createElement("p");
const btnNextRound = document.createElement("button");
const gameOver = document.querySelector("#game-over");
const btnPlayAgain = document.querySelector("#play-again");
const finalMsg = document.querySelector("#final-msg");
const btnRules = document.querySelector("#btn-rules");
const showRules = document.querySelector("#show-rules");
const pickedContainer = document.querySelector("#picked-container");
// Store the rules into an object for simplification
let winnerHands = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};
let looserHands = {
  rock: "paper",
  paper: "scissors",
  scissors: "rock",
};

// Starter values
let weapons = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let playerSelection;

// Change Displays
let showChoices = function () {
  initialWeapons.classList.add("hide");
  whoPickedWhat.classList.remove("hide");
  setTimeout(function () {
    pickedContainer.classList.remove("hide");
  }, 2000);
};
let showInitialWeapons = function () {
  initialWeapons.classList.remove("hide");
  whoPickedWhat.classList.add("hide");
  pickedContainer.classList.add("hide");
};

// Display Message for round winner + btn for Next Round
let roundResults = function () {
  checkforWinner();
  pickedContainer.appendChild(winnerMessage);
  pickedContainer.appendChild(btnNextRound);
  winnerMessage.removeAttribute("class", "hide");
  btnNextRound.removeAttribute("class", "hide");
  // Create Button for Next Round
  btnNextRound.setAttribute("id", "btn-next-round");
  btnNextRound.textContent = "PLAY NEXT ROUND";
  btnNextRound.addEventListener("click", function () {
    showInitialWeapons();
  });
};
// Display or not the Rules of the Game
document.addEventListener("click", function (e) {
  if (btnRules.contains(e.target)) {
    showRules.classList.toggle("hide");
  } else if (
    !showRules.classList.contains("hide") &&
    !showRules.contains(e.target)
  ) {
    showRules.classList.add("hide");
  }
});

let playAgain = function () {
  btnPlayAgain.addEventListener("click", function () {
    gameOver.classList.add("hide");
    playerScore = 0;
    userScore.textContent = 0;
    computerScore = 0;
    houseScore.textContent = 0;
    showInitialWeapons();
  });
};
// Disable buttons after picking a choice
let disableBtns = function () {
  pickUser.disabled = true;
  pickHouse.disabled = true;
};

// Let's create a random adversary
let computerPlay = function () {
  return weapons[Math.floor(Math.random() * 3)];
};

let checkforWinner = function () {
  // Check for winner
  if (playerScore === 5) {
    finalMsg.innerHTML = "YOU<br>WIN<br>THE<br>GAME";
    gameOver.classList.remove("hide");
    playAgain();
  } else if (computerScore === 5) {
    finalMsg.innerHTML = "GAME<br>OVER<br>FOR<br>YOU";
    gameOver.classList.remove("hide");
    playAgain();
  }
};

// Create a function for one single round
let playRound = function (playerSelection, computerSelection) {
  weaponChoice.forEach((button) => {
    button.addEventListener("click", function (e) {
      winnerMessage.setAttribute("class", "hide");
      btnNextRound.setAttribute("class", "hide");
      // Get to know which weapon the user chose
      if (rockChoice.contains(e.target)) {
        playerSelection = "rock";
        pickHouse.innerHTML = "";
        pickUser.innerHTML = `<img src="images/rock-icon.png" alt="Rock icon">`;
      } else if (paperChoice.contains(e.target)) {
        playerSelection = "paper";
        pickHouse.innerHTML = "";
        pickUser.innerHTML = `<img src="images/paper-icon.png" alt="Rock icon">`;
      } else if (scissorsChoice.contains(e.target)) {
        playerSelection = "scissors";
        pickHouse.innerHTML = "";
        pickUser.innerHTML = `<img src="images/scissors-icon.png" alt="Rock icon">`;
      }
      showChoices();
      computerSelection = computerPlay();
      // Set timeout here
      setTimeout(function () {
        pickHouse.innerHTML = `<img src="images/${computerSelection}-icon.png" alt="Computer icon">`;
      }, 2000);
      // Use the rules object + input to determine the result of the round
      if (winnerHands[playerSelection] === computerSelection) {
        setTimeout(function () {
          winnerMessage.textContent = "YOU WIN!";
          playerScore++;
          userScore.textContent = playerScore;
          roundResults();
        }, 2000);
        disableBtns();
      } else if (looserHands[playerSelection] === computerSelection) {
        setTimeout(function () {
          winnerMessage.textContent = "YOU LOOSE!";
          computerScore++;
          houseScore.textContent = computerScore;
          roundResults();
        }, 2000);
        disableBtns();
      } else {
        setTimeout(function () {
          winnerMessage.textContent = "IT'S A TIE!";
          roundResults();
        }, 2000);
        disableBtns();
      }
    });
  });
};

let playGame = function () {
  // Listen for a user choice
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
};

playGame();
