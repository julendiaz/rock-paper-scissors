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

// Starter values
let weapons = ["rock", "paper", "scissors"]; 
let playerScore = 0;
let computerScore = 0; 
let playerSelection;

// Button next round 
btnNextRound.setAttribute("id", "btn-next-round");
btnNextRound.textContent = "PLAY NEXT ROUND";

// Change Displays
let showChoices = function () {
    initialWeapons.classList.add("hide");
    whoPickedWhat.classList.remove("hide");
}

let showInitialWeapons = function () {
    initialWeapons.classList.remove("hide");
    whoPickedWhat.classList.add("hide");
}


// Create a function for play the game 5 rounds
let playGame = function() {
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
                
                
                // Use the previous objects + input to determine the result of the round
                if(winnerHands[playerSelection] === computerSelection) {
                    winnerMessage.textContent = "YOU WIN!";
                    whoPickedWhat.appendChild(winnerMessage);
                    whoPickedWhat.appendChild(btnNextRound);
                    playerScore++;
                    userScore.textContent = playerScore;
                    btnNextRound.addEventListener("click", function() {
                        showInitialWeapons();
                    })
                    console.log(playerSelection, computerSelection);
                } else if (looserHands[playerSelection] === computerSelection) {
                    winnerMessage.textContent = "YOU LOOSE!";
                    whoPickedWhat.appendChild(winnerMessage);
                    whoPickedWhat.appendChild(btnNextRound);
                    computerScore++;
                    houseScore.textContent = computerScore;
                    btnNextRound.addEventListener("click", function() {
                        showInitialWeapons();
                    })
                    console.log(playerSelection, computerSelection);
                } else {
                    winnerMessage.textContent = "IT'S A TIE!";
                    whoPickedWhat.appendChild(winnerMessage); 
                    whoPickedWhat.appendChild(btnNextRound);
                    btnNextRound.addEventListener("click", function() {
                        showInitialWeapons();
                    })
                    console.log(playerSelection, computerSelection);
                }
            })
        });
    }
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



