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

weaponChoice.forEach((button) => {
    button.addEventListener("click", function(e){
        // Get to know which weapon the user chose
        if (rockChoice.contains(e.target)) {
            playerSelection = "rock";
            pickUser.appendChild(rockImg);
        } else if (paperChoice.contains(e.target)) {
            playerSelection = "paper";
            pickUser.appendChild(paperImg);
        } else if (scissorsChoice.contains(e.target)) {
            playerSelection = "scissors";
            pickUser.appendChild(scissorsImg);
        }
        showChoices();
        
        // Let's create a random adversary
        let computerPlay = function () {
            let computerChoice = weapons[Math.floor(Math.random() * 3)];
            pickHouse.innerHTML = `<img src="images/${computerChoice}-icon.png" alt="Computer icon">`
            return computerChoice;
        }

        // Create a function for one single round
        let playRound = function(playerSelection, computerSelection) {
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
            // Use the previous objects + input to determine the result of the round
            if(winnerHands[playerSelection] === computerSelection) {
                console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                winnerMessage.textContent = "YOU WIN!";
                whoPickedWhat.appendChild(winnerMessage);
                playerScore++;
                userScore.textContent = playerScore;
            } else if (looserHands[playerSelection] === computerSelection) {
                console.log(`You loose! ${computerSelection} beats ${playerSelection} `);
                winnerMessage.textContent = "YOU LOOSE!";
                whoPickedWhat.appendChild(winnerMessage);
                computerScore++;
                houseScore.textContent = computerScore;
            } else {
                console.log("It's a tie");
                winnerMessage.textContent = "IT'S A TIE!";
                whoPickedWhat.appendChild(winnerMessage);
            }
        }

        // Create a function for play the game 5 rounds
        let playGame = function() {
            // Get the input for both players
            // Listen for a user choice
            const computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
        // Check for winner 
        playerScore > computerScore ? console.log("Player Wins!") :
        playerScore < computerScore ? console.log("Computer Wins!") : 
        console.log("It looks like is a Tie!"); 
        }

        playGame();
    })
})



