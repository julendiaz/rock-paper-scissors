// DOM Manipulation
const weaponChoice = document.querySelectorAll(".weapon");
const rockChoice = document.querySelector("#btn-rock");
const paperChoice = document.querySelector("#btn-paper");
const scissorsChoice = document.querySelector("#btn-scissors");
const userScore = document.querySelector("#user-score");
const houseScore = document.querySelector("#house-score");
const initialWeapons = document.querySelector("#play-container");
const whoPickedWhat = document.querySelector("#round-container")
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
        } else if (paperChoice.contains(e.target)) {
            playerSelection = "paper";
        } else if (scissorsChoice.contains(e.target)) {
            playerSelection = "scissors";
        }
        showChoices();
        
        // Let's create a random adversary
        let computerPlay = function () {
            return weapons[Math.floor(Math.random() * 3)]
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
                playerScore++;
                userScore.textContent = playerScore;
            } else if (looserHands[playerSelection] === computerSelection) {
                console.log(`You loose! ${computerSelection} beats ${playerSelection} `);
                computerScore++;
                houseScore.textContent = computerScore;
            } else {
                console.log("It's a tie")
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



