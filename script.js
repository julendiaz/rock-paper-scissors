// STARTER VALUES
// Store the values Rock, Paper and Scissors in an array
let weapons = ["rock", "paper", "scissors"]; 
// Store the initial scores
let playerScore = 0;
let computerScore = 0; 

// Create computerPlay func that returns a random Rock Paper and Scissors
let computerPlay = function () {
    return weapons[Math.floor(Math.random() * 3)]
}

//Each round
let playRound = function(playerSelection, computerSelection) {
    // Store the rules into an object
    let winners = {
        "rock": "scissors",
        "paper": "rock",
        "scissors": "paper"
    }
    let loosers = {
        "rock": "paper",
        "paper": "scissors",
        "scissors": "rock"
    }
    // Make an if statement for the choices of each player
    if(winners[playerSelection] === computerSelection) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`); 
        playerScore++;
    } else if (loosers[playerSelection] === computerSelection) {
        console.log(`You loose! ${computerSelection} beats ${playerSelection} `);
        computerScore++;
    } else {
        console.log("It's a tie")
    }
}

// Build the game
let game = function() {
    // Play for 5 rounds
    for (let i = 0; i < 5; i++) {
        // // Get the input for both players
        const playerSelection = prompt(); 
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    // Check for winner
    playerScore > computerScore ? console.log("Player Wins!") :
    playerScore < computerScore ? console.log("Computer Wins!") : 
    console.log("It looks like is a Tie!"); 
}

// Console.log the result of the game
console.log(game());



