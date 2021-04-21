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
const winnerMessage = document.createElement('p');
const btnNextRound = document.createElement("button");
const gameOver = document.querySelector("#game-over");
const btnPlayAgain = document.querySelector("#play-again");
const finalMsg = document.querySelector("#final-msg");
const btnRules = document.querySelector("#btn-rules");
const showRules = document.querySelector("#show-rules");

// Store the rules into an object for simplification
let winnerHands = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
}
let looserHands = {
    "rock": "paper",
    "paper": "scissors",
    "scissors": "rock"
}

// Starter values
let weapons = ["rock", "paper", "scissors"]; 
let playerScore = 0;
let computerScore = 0; 
let playerSelection;

// Change Displays
let showChoices = function () {
    initialWeapons.classList.add("hide");
    whoPickedWhat.classList.remove("hide");
}
let showInitialWeapons = function () {
    initialWeapons.classList.remove("hide");
    whoPickedWhat.classList.add("hide");
}

// Display Message for round winner + btn for Next Round
let roundResults = function () {
    whoPickedWhat.appendChild(winnerMessage);
    whoPickedWhat.appendChild(btnNextRound);
    // Create Button for Next Round 
    btnNextRound.setAttribute("id", "btn-next-round");
    btnNextRound.textContent = "PLAY NEXT ROUND";
    btnNextRound.addEventListener("click", function() {
        showInitialWeapons();
    })
}
// Display or not the Rules of the Game
document.addEventListener("click", function(e) {
    if (btnRules.contains(e.target)) {
        showRules.classList.toggle("hide");
    } else if (!showRules.classList.contains("hide") && !showRules.contains(e.target)) {
        showRules.classList.add("hide");
    } 
})

let playAgain = function () {
    btnPlayAgain.addEventListener("click", function(){
        gameOver.classList.add("hide");
        playerScore = 0;
        userScore.textContent = 0;
        computerScore = 0; 
        houseScore.textContent = 0;
        showInitialWeapons();
    })
};
// Disable buttons after picking a choice
let disableBtns = function () {
    pickUser.disabled = true;
    pickHouse.disabled = true;
}

// Let's create a random adversary
let computerPlay = function () {
    let computerChoice = weapons[Math.floor(Math.random() * 3)];
    pickHouse.innerHTML = `<img src="images/${computerChoice}-icon.png" alt="Computer icon">`
    return computerChoice;
};

// Create a function for one single round
let playRound = function(playerSelection, computerSelection) {
    weaponChoice.forEach((button) => {
        button.addEventListener("click", function(e){
            // Get to know which weapon the user chose
            if (rockChoice.contains(e.target)) {
                    playerSelection = "rock";
                    computerSelection = computerPlay();
                    pickUser.innerHTML = `<img src="images/rock-icon.png" alt="Rock icon">`
            } else if (paperChoice.contains(e.target)) {
                    playerSelection = "paper";
                    computerSelection = computerPlay();
                    pickUser.innerHTML = `<img src="images/paper-icon.png" alt="Rock icon">`
            } else if (scissorsChoice.contains(e.target)) {
                    playerSelection = "scissors";
                    computerSelection = computerPlay();
                    pickUser.innerHTML = `<img src="images/scissors-icon.png" alt="Rock icon">`
            }
            showChoices();
            // Use the rules object + input to determine the result of the round
            if(winnerHands[playerSelection] === computerSelection) {
                winnerMessage.textContent = "YOU WIN!";
                roundResults();
                playerScore++;
                userScore.textContent = playerScore; 
                disableBtns();
            } else if (looserHands[playerSelection] === computerSelection) {
                winnerMessage.textContent = "YOU LOOSE!";
                roundResults();
                computerScore++;
                houseScore.textContent = computerScore;
                disableBtns();
            } else {
                winnerMessage.textContent = "IT'S A TIE!";
                roundResults();  
                disableBtns();
            }
            // Check for winner 
            if (playerScore === 5) {
                finalMsg.innerHTML = "YOU<br>WIN<br>THE<br>GAME";
                gameOver.classList.remove("hide");
                playAgain();
            } else if (computerScore === 5) {
                finalMsg.innerHTML = "GAME<br>OVER<br>FOR<br>YOU";
                gameOver.classList.remove("hide");
                playAgain();
            };
        })
    });
};

let playGame = function () {
    // Listen for a user choice
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

playGame();



