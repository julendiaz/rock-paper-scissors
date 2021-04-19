// Starter values
let weapons = ["rock", "paper", "scissors"]; 
let playerScore = 0;
let computerScore = 0; 

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
    } else if (looserHands[playerSelection] === computerSelection) {
        console.log(`You loose! ${computerSelection} beats ${playerSelection} `);
        computerScore++;
    } else {
        console.log("It's a tie")
    }
}

// Create a function for play the game 5 rounds
let playGame = function() {
    for (let i = 0; i < 5; i++) {
        // Get the input for both players
        // const playerSelection = prompt(); 
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    // Check for winner 
    playerScore > computerScore ? console.log("Player Wins!") :
    playerScore < computerScore ? console.log("Computer Wins!") : 
    console.log("It looks like is a Tie!"); 
}




