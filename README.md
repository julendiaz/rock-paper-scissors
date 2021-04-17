# Rock Paper Scissors Game - The Odin Project

## Brief Introduction

In this project, we are going to build from scratch the implementation for the Old-School game Rock Paper Scissors. This is a really nice and introductory way of applying the widespread system of thinking as a programmer.

Regarding the purpose of the exercise, I went for using the already designed UI from Front-End Mentor Challenge so I could focus on trying to come up with a clean solution in the javascript file.

## Goals of the Project

- [ ] Make the game Rock Paper Scissors work
- [ ] Implement the "Think like a Programmer" system
- [ ] Come up with at least two different solutions for the problem
- [ ] Implement the UI from Front-End Mentor
- [ ] Have fun

## Approach

> Thinking like a Programmer is about having fun with problem-solving

### Understand the problem

- How are we going to make the computer play?
- How to write the function for playing the game?
- How many rounds are we playing?
- How are we going to repeat the rounds?
- How are we going to take the player selection input?
- **How could we store the rules of the game in javascript?**

### Pseudocode

```javascript
// Starter Values
Store the values Rock, Paper and Scissors in an array
Store playerScore into a variable, start at zero
Store computerScore into a variable, start at zero
//Make the computer play
Create computerPlay func that returns a random Rock Paper and Scissors
// Build the game
Create a game func to play 5 rounds of the game and report a winner
    create a for loop to play 5 rounds
        Create a func for each Round with the two parameters for player and computer selection
            Store the rules into an object
            Make an if statement for the choices of each player
                Console.log the results of the round

// Get the input for both players
Store the input of playerSelection with a promp
Store the computerSelection with the computer random func

Console.log the result of the game
```

### Research

[Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
[Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
