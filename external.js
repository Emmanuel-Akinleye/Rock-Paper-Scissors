// We're using this   

let rounds = 5;
var playerWins = 0;
var computerWins = 0;
const buttons = document.querySelectorAll('#btn');
const resultElement = document.getElementById('result');
const playerScore = document.querySelector('.playerScore')
const computerScore = document.querySelector('.computerScore')
const reloadBtn = document.querySelector('.reloadBtn');

reloadBtn.addEventListener('click', () => location.reload())

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
// This is the function we'll use to play a round of rock paper and scissors
const playRound = (playerSelection, computerSelection) => {
    
    //comnerting our inputs to lowercase so as to make every input case-insensitive
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // These LOCs here determines who whins a single round or not
        if (playerSelection == "rock" && computerSelection == "scissors") {
            playerWins++;
            playerScore.textContent = playerWins;
            return "You Win! Rock beats Scissors";
        }
        else if (playerSelection == "paper" && computerSelection == "rock") {
            playerWins++;
            playerScore.textContent = playerWins;
            return 'You Win! Paper beats Rock';
        }
        else if (playerSelection == "scissors" && computerSelection == "paper") {
            playerWins++;
            playerScore.textContent = playerWins;
            return 'You Win! Scissors beats Paper'
        }
        if (computerSelection == "rock" && playerSelection == "scissors") {
            computerWins++;
            computerScore.textContent = computerWins;
            return "You Lose! Rock beats Scissors";
        }
        else if (computerSelection == "paper" && playerSelection == "rock") {
            computerWins++;
            computerScore.textContent = computerWins;
            return 'You Lose! Paper beats Rock';
        }
        else if (computerSelection == "scissors" && playerSelection == "paper") {
            computerWins++;
            computerScore.textContent = computerWins;
            return 'You Lose! Scissors beats Paper'
        }
        else if (playerSelection === computerSelection) {
            return "It's a tie";
        }

        // We're going to be displaying an error if the player inputs anything that isn't rock paper or scissors
        else {
            return "ERROR"
        }
        
    
}


const disableButtons = () => {
    buttons.forEach(button => {
        button.disabled = true;
    })
}



const handleClick = (event) => {
    const playerSelection = event.currentTarget.classList[0]; // Get the class name of the clicked button
    const computerChoice = getComputerChoice();
    const result = playRound(playerSelection, computerChoice);
    resultElement.textContent = result;
    getResult();
};
buttons.forEach(button => {
    button.addEventListener('click', handleClick)
})

// This function is used to get result after all rounds has ended
const getResult = () => {
    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;
    if (playerWins || computerWins === 5) {
        if (playerWins >= 5) {
            resultElement.innerHTML = "You Won the match";
            disableButtons()
        }
        else if (computerWins >= 5 ) {
            resultElement.innerHTML ='Your Opponent Won the match'
            disableButtons()
        }
    }
    
}


