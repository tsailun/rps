function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    const randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection){
    const playerChoice = playerSelection.toLowerCase();
    if (playerChoice === computerSelection){
        console.log("its a tie!")
        return 0;
    }

    if(
        (playerChoice === 'rock' && computerSelection === 'scissors')||
        (playerChoice === 'scissors' && computerSelection === 'rock')||
        (playerChoice === 'paper' && computerSelection === 'rock')
    )
        {
        console.log(`you win! ${playerChoice} beats ${computerSelection}`)
        return 1;
    }
    console.log(`you lose! ${computerSelection} beats ${playerChoice}`);
    return -1;
}
function game(){
    let playerTally = 0
    let computerTally = 0
    for (let i=0; i< 5; i++){
        let userInput = prompt("Please enter rock, paper or scissors");
        let score = playRound(userInput,getComputerChoice());
        if(score === 1){
            playerTally++;
        }else if(score === -1){
            computerTally++;
        }
    }
    console.log(`Player won ${playerTally} rounds and Computer won ${computerTally}`)
}
game();