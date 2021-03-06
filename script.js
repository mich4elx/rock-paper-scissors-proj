// Function to return rock, paper, or scissors for the computer.
function computerPlay(){
    // Create an array to hold rock, paper or scissors to randomly select an index from.
    const choice = ["Rock", "Paper", "Scissors"];
    // Generate random number from 0-2 for selection of index.
    let choiceNum = Math.floor(Math.random() * 3)
    // Return computer's choice.
    return choice[choiceNum].toLowerCase();
}
const computerChoice = computerPlay();

// Player choice
const playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();

// Function to start game and accept two parameters for player and computer choices.
function playGame(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        console.log("You tied!")
    }else if(playerChoice === 'rock' && computerChoice === 'paper'){
        console.log("You lost! Paper covers Rock!")
    }else if(playerChoice === 'rock' && computerChoice === 'scissors'){
        console.log("You won! Rock smashes Scissors!")
    }else if(playerChoice === 'paper' && computerChoice === 'rock'){
        console.log("You won! Paper covers Rock!")
    }else if(playerChoice === 'paper' && computerChoice === 'scissors'){
        console.log("You lost! Scissors cuts Paper!")
    }else if(playerChoice === 'scissors' && computerChoice === 'rock'){
        console.log("You lost! Rock smashes Scissors!")
    }else if(playerChoice === 'scissors' && computerChoice === 'paper'){
        console.log("You won! Scissors cuts Paper!")
    }
    
}

playGame(playerChoice, computerChoice);
console.log(playerChoice);
console.log(computerChoice);


