# Rock Paper Scissors - TOP + Front-End Mentor

![Frame 1portadagithub](https://user-images.githubusercontent.com/66780327/115557714-475ba980-a2b2-11eb-870c-5dd59aa5517f.png)

Go to the [Live Preview](https://julendiaz.github.io/rock-paper-scissors/);

## Table of contents

- [Overview](#overview)
- [The challenge](#the-challenge)
- [Screenshots](#screenshots)
- [My process](#my-process)
  - [Understand the problem](#understand-the-problem)
  - [Pseudocode](#pseudocode)
  - [Mobile-first](#mobile-first)
  - [Game Rules](#game-rules)
  - [DOM Manipulation](#dom-manipulation)
  - [Disabling buttons](#disabling-buttons)
- [Useful sources](#useful-sources)
- [Additional Improvements](#additional-improvements)
- [Attribution](#attribution)
- [Contact](#contact)

## Overview

In this project, we are going to build from scratch the implementation for the Old-School game Rock Paper Scissors. This is a really nice and introductory way of applying the widespread system of thinking as a programmer.

Regarding the purpose of the exercise, I went for using the already designed UI from [Front-End Mentor](https://www.frontendmentor.io/) Challenge so I could focus on trying to come up with a clean solution in the javascript file. At least just until I come up with a cooler UI.

I really enjoyed and learned a lot while doing this one. Not only I developed everything from a Mobile-first approach but I almost wrote all the javascript code by myself. It's not a perfect solution, but for now it works.

## The Challenge

- [x] Make the game Rock Paper Scissors work
- [x] Implement the "Think like a Programmer" system
- [x] Come up with at least two different solutions for the problem
- [x] Implement the UI from Front-End Mentor
- [x] Make it Responsive
- [x] Have fun

## Screenshots

![Desktop1](/screenshots/desktop1.PNG);
![Desktop2](/screenshots/desktop2.PNG);
![Desktoprules](/screenshots/rules.PNG);
![Desktopwin](/screenshots/winthegame.PNG);
![Mobile1](/screenshots/mobile1.PNG);
![Mobile2](/screenshots/mobile2.PNG);
![Mobilegameover](/screenshots/mobile-gameover.PNG);

## My Process

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

Surprisingly, it was much easier to go from mobile default sizes into desktop mode. So from now on, I might always start developing every app with a mobile-first technique.

For implementing the media queries, I worked first with a Responsive Mobile design of 375px x 700px aprox, and then add the change at 1000px. Just because the mobile design seem to work even in tablet intermediate size.

```css
@media (min-width: 1000px) {
  /* Media for Header */
  #scores-container {
    margin: 2.2em auto;
    width: 40em;
    height: 8em;
    border: solid 0.2em rgba(179, 200, 238, 0.575);
    border-radius: 1em;
  }
```

### Game Rules

Regarding the javascript development for making the game work, I wanted to come up with a solution which played with some other tools like javascript objects. That's why I thought of storing the winner hands and the loser hands in two objects, so afterwards I could identify which player had the winner or loser hand.

```javascript
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

if (winnerHands[playerSelection] === computerSelection) {
  winnerMessage.textContent = "YOU WIN!";
  playerScore++;
} else if (looserHands[playerSelection] === computerSelection) {
  winnerMessage.textContent = "YOU LOOSE!";
  computerScore++;
} else {
  winnerMessage.textContent = "IT'S A TIE!";
}
```

### DOM Manipulation

Because of the previous lecture in The Odin Project curriculum, I wanted to see if I could apply the few different methods of manipulating elements with the DOM. That's why for example, in the random computer choice for each weapon, I used the innerHTML feature for inserting the img element with a template literal. I'm starting to see template literals as something really useful.

```javascript
let computerPlay = function () {
  let computerChoice = weapons[Math.floor(Math.random() * 3)];
  pickHouse.innerHTML = `<img src="images/${computerChoice}-icon.png" alt="Computer icon">`;
  return computerChoice;
};
```

### Disabling Buttons

One of the hardest bugs I had while building this project was the one when I clicked one of the weapons after each round. Everything went completely nuts. At the end, I just needed to re-arrange things a bit in the file and disable the buttons after each round. This is the simple method I used.

```javascript
// Disable buttons after picking a choice
let disableBtns = function () {
  pickUser.disabled = true;
  pickHouse.disabled = true;
};
```

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

- [x] Set up a Timer for each round until Computer choses a weapon.
- [ ] Add keybord shortcuts for playing
- [ ] Add some kind of motion design
- [ ] Come up with a cooler UI: Elements: Fire - Plants - Water
- [ ] Add a story behind the game

## Attribution

- UI from Front-End Mentor.
- Developed by Julen Diaz

## Contact

[<img alt="Instagram" src="https://img.shields.io/badge/julen.dev%20-%23E4405F.svg?&style=for-the-badge&logo=Instagram&logoColor=white"/>](https://www.instagram.com/julen.dev/)
[<img alt="LinkedIn" src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>](https://www.linkedin.com/in/julenfront/)
[<img alt="Youtube" src="https://img.shields.io/badge/julendev%20-%23FF0000.svg?&style=for-the-badge&logo=YouTube&logoColor=white"/>](https://www.youtube.com/channel/UCUoloquxVnnNLFTD8RwthIQ)
[<img alt="Twitter" src="https://img.shields.io/badge/@julendev%20-%231DA1F2.svg?&style=for-the-badge&logo=Twitter&logoColor=white"/>](https://twitter.com/julendev)
