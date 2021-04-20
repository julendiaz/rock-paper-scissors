# Rock Paper Scissors Game - The Odin Project

## Brief Introduction

In this project, we are going to build from scratch the implementation for the Old-School game Rock Paper Scissors. This is a really nice and introductory way of applying the widespread system of thinking as a programmer.

Regarding the purpose of the exercise, I went for using the already designed UI from Front-End Mentor Challenge so I could focus on trying to come up with a clean solution in the javascript file.

## The Challenge

- [x] Make the game Rock Paper Scissors work
- [x] Implement the "Think like a Programmer" system
- [x] Come up with at least two different solutions for the problem
- [x] Implement the UI from Front-End Mentor
- [ ] Make it Responsive
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

This is the initial pseudocode I came up with at first. Although it was a good starting point, I had to re-arrange things a bit in order to work it out. In the implementation section I will show you the final result.

```
// Starter Values
Store the values Rock, Paper and Scissors in an array
Store playerScore into a variable, start at zero
Store computerScore into a variable, start at zero
// Make the computer play
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

### Mobile-First

For this project, I wanted to try implementing a common approach regarding responsive Web Design. And that is going for a mobile-first design and development. If you are not familiarized with this term, it is just a way of prioritizing mobile user content over desktop devices.

It is the first time I'm going to try it out, so I hope everything is fine. I'll keep you updated.

## Useful Sources

- [Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [Terniary Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- [Mobile-first](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/Mobile_first)
- [How to get rid of blurry edges](https://jsfiddle.net/Will_law/Lo0n9g2y/)
- [Using em's instead of px](https://stackoverflow.com/questions/609517/why-em-instead-of-px)
- [How to disable a button](https://www.sololearn.com/Discuss/1794949/solved-is-there-a-way-to-disable-click-on-an-element-with-an-event-listener-without-removing-the)
- [How to center an element with absulte position](https://thoughtbot.com/blog/positioning);

## Additional Improvements

These are just a few features that I would like to work on my free time. There is always room for improvement. Sometimes it's about cleaning up the code or coming up with better solutions, or it might be about designing some cool animation. Just keep improving.

- [ ] Set up a Timer for each round until Computer choses a weapon.
- [ ] Add keybord shortcuts for playing
- [ ] Add some kind of motion design
- [ ] Come up with a cooler UI
- [ ] Add a story behind the game

## Attribution

- Rock, Paper and Scissors Illustration from veectyzy.
