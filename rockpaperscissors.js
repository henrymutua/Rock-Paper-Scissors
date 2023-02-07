const getComputerChoice = () =>{
    let someArray = ['rock', 'paper', 'scissors'];
    return someArray[Math.floor(Math.random()*someArray.length)];
}

const playRound = (playerSelection, computerSelection) => {
    
if (playerSelection == 'rock' && computerSelection == 'scissors'){
    return('You win! rock beats scissors!')
}
else if(playerSelection == 'rock' && computerSelection == 'paper'){
    return('You lose. Paper beats rock!')
}
else if(playerSelection == 'scissors' && computerSelection == 'rock'){
    return('You lose! Rock beats scissors')
}
else if(playerSelection == 'paper' && computerSelection == 'rock'){
    return('You win! Paper beats rock')
}
else if(playerSelection == 'paper' && computerSelection == 'scissors'){
    return('You lose! Scissors beats paper!')
}
else if(playerSelection == 'scissors' && computerSelection == 'paper'){
    return('You win! Scissors beats paper')
}
}
computerSelection = getComputerChoice();
   playerSelection = prompt('Please enter something!')
const savePlayRound = playRound();
console.log(savePlayRound);


const button1 = document.getElementById('1');

button1.addEventListener('click', savePlayRound => {
    
} 


)









