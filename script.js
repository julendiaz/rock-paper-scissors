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

// Display Message for round winner + btn Next Round
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

let playGame = function() {
    // Let's create a random adversary
    let computerPlay = function () {
        let computerChoice = weapons[Math.floor(Math.random() * 3)];
        pickHouse.innerHTML = `<img src="images/${computerChoice}-icon.png" alt="Computer icon">`
        return computerChoice;
    }

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
                } else if (looserHands[playerSelection] === computerSelection) {
                    winnerMessage.textContent = "YOU LOOSE!";
                    roundResults();
                    computerScore++;
                    houseScore.textContent = computerScore;
                } else {
                    winnerMessage.textContent = "IT'S A TIE!";
                    roundResults();  
                }

                // Check for winner 
                if (playerScore === 5) {
                    console.log("Player Wins!")
                } else if (computerScore === 5) {
                    console.log("Computer Wins!");
                };

            })
        });
    }
    // Listen for a user choice
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    
};
playGame();



