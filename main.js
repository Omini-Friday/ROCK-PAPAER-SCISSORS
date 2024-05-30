'use strict';

/* SCORE BOARD */
let humanScore = document.querySelector('.human');
let moves = document.querySelector('.moves');
let computerScore = document.querySelector('.computer');

/* HUMAN CHOICE BUTTONS */
let humanOptions = document.querySelectorAll('.choice__btn');

/* GAME ACTIONS AND OUTCOMES */
let gameOutcome = document.querySelector('.game__outcome');
let computerChoice = document.querySelector('.computer__choice');

/* RESTART GAME BUTTON */
let restartBtn = document.querySelector('.reset__btn');




currentScore();

function currentScore(){
    /* INITIALIZE PLAYERS' SCORES TO ZERO AND MOVES TO 10 */
    let scoreTable = { human: 0, computer: 0, moves: 10};
    const arrOfChoices = ['Rock', 'Paper', 'Scissors'];
    moves.textContent = scoreTable.moves;


    /* COMPUTER CHOICE */
    let computer = () => {
        const randIndex = Math.floor(Math.random() * (arrOfChoices.length));
        const computer = arrOfChoices[randIndex];
        return computer;
    }
  
    /* HUMAN CHOICE */
    humanOptions.forEach(function(btn){
        btn.addEventListener('click', () => {
            scoreTable.moves--;
            moves.textContent = scoreTable.moves;
            let human = btn.value, comp = computer();
            computerChoice.textContent =`computer choice: ${comp}`;
            compareChoices(human, comp);
            scoreTable.moves === 0 ? gameOver(): '';
      });
      });


    /* CONTENTS TO DISPLAY IF COMPUTER WINS ROUND */
    const humanWins = () => {
        scoreTable.human++;
        humanScore.textContent = scoreTable.human;
        gameOutcome.textContent = `you won`;
    }

     /* CONTENTS TO DISPLAY IF HUMAN WINS ROUND */
    const computerWins = () => {
        scoreTable.computer++;
        computerScore.textContent = scoreTable.computer;
        gameOutcome.textContent = `computer won`;
    }

    /* COMPARE HUMAN AND COMPUTER OPTIONS TO DECIDE WINNNER */
    function compareChoices(human, comp){
        if(human === comp){
            gameOutcome.textContent = `it's a tie`;
        }else if(human === 'Rock'){
            if(comp === 'Scissors'){
                humanWins();
            }else{
                computerWins();
        }
        }else if(human == 'Paper'){
        if(comp === 'Rock'){
            humanWins();
        }else{
            computerWins();
        }
        }else if(human == 'Scissors'){
            if(comp === 'Paper'){
                computerWins();
            }else{
                computerWins();
        }
    }
    }

    /* WHEN MOVES = 0, DEACTIVATE BUTTONS END GAME AND DISPLAY FINAL WINNER*/
    function gameOver(){
        humanOptions.forEach(btn => {btn.disabled = true})
        if (scoreTable.human === scoreTable.computer){
            gameOutcome.textContent= `IT'S A TIE !`
        }else if (scoreTable.human > scoreTable.computer){
            gameOutcome.textContent = `YOU WON THE GAME 🎉🎉`;
        }else{
            gameOutcome.textContent = `YOU LOST THE GAME 😢😢`;
        }
    }

    /* RESTART THE GAME AND RESET USERSCORE AND MOVES TO DEFAULT*/
    restartBtn.addEventListener('click', () =>{
        window.location.reload();
        scoreTable = { human: 0, computer: 0, moves: 10,}
    })
}
