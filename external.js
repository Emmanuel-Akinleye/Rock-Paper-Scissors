// We're using this to get the computer choice

let rounds = 5;
var playerWins = 0;
var computerWins = 0;
const button = document.querySelector('.button');

const getComputerChoice = () => {
    // This below is an array containing all the choices the computer can choose
    const choices = ["Rock", "Paper", "Scissors"]
    // We're randomizing the value of the computer choice here
    const randomChoice = Math.floor(Math.random() * choices.length);
    //This is a switch condition to check the randomChoice
    switch(randomChoice) {
        case 0:
            return "Rock";
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break;
    }

}
const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
        if (playerSelection == "rock" && computerSelection == "scissors") {
            playerWins++;
            return "You Win! Rock beats Scissors";
        }
        else if (playerSelection == "paper" && computerSelection == "rock") {
            playerWins++;
            return 'You Win! Paper beats Rock';
        }
        else if (playerSelection == "scissors" && computerSelection == "paper") {
            playerWins++;
            return 'You Win! Scissors beats Paper'
        }
        if (computerSelection == "rock" && playerSelection == "scissors") {
            computerWins++;
            return "You Lose! Rock beats Scissors";
        }
        else if (computerSelection == "paper" && playerSelection == "rock") {
            computerWins++;
            return 'You Lose! Paper beats Rock';
        }
        else if (computerSelection == "scissors" && playerSelection == "paper") {
            computerWins++;
            return 'You Lose! Scissors beats Paper'
        }
        else if (playerSelection === computerSelection) {
            return "It's a tie";
        }
        else {
            return "ERROR"
        }
    
    
}





const game = () => {
    
        for(let i = 0; i <= 5; i++) {
            let playerSelection = window.prompt("Choose a Weapon: Rock, Paper or Scissors");
            let computerChoice = getComputerChoice()
            console.log (playRound(playerSelection, computerChoice));
        
        }

}

const getResult = () => {
    if (playerWins > computerWins) {
        console.log ("You Won the match")
    }
    else if (computerWins > playerWins) {
        console.log ('Your Opponent Won the match')
    }
    else if (playerWins === computerWins) {
        console.log("The match has ended in a tie");
    }
}
game();
getResult();
