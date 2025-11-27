
let score = JSON.parse(localStorage.getItem('score'));
if(score === null){
  score = {
    wins:0,
    loses:0,
    ties:0
  }
}

updateScore();

function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove = '';
    
    if(randomNumber >= 0 && randomNumber < 1/3){
      computerMove = 'rock';
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
      computerMove = 'paper';
    }
    else if(randomNumber >= 2/3 && randomNumber < 1){
      computerMove = 'scissors'; 
    }
    return computerMove;
}


function checkResult(playerMove){

  const computerMove = pickComputerMove();
  let result = '';

    if(playerMove === 'rock'){
     
      if(computerMove === 'rock'){
        result = 'Its a Tie';
      }
      else if(computerMove === 'paper'){
        result = 'You Won';
      }
      else if(computerMove === 'scissors'){
        result = 'You Lose';
      }
    }

    else if(playerMove === 'paper'){
      if(computerMove === 'rock'){
        result = 'You Won';
      }
      else if(computerMove === 'paper'){
        result = 'Tie';
      }
      else if(computerMove === 'scissors'){
        result = 'You Lose';
      }
    }

    else if(playerMove === 'scissors'){
      if(computerMove === 'rock'){
        result = 'You Lose';
      }
      else if(computerMove === 'paper'){
        result = 'You Won';
      }
      else if(computerMove === 'scissors'){
        result = 'Tie';
      }
      
    }
    if(result === 'You Won'){
      score.wins += 1;
    }
    else if(result === 'You Lose'){
      score.loses ++;
    }
    else if(result === 'Tie'){
      score.ties ++;
    }

    localStorage.setItem('score',JSON.stringify(score));
    updateScore();
    document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = `You <img src="${playerMove}-emoji.png" alt="" class="moves">
<img src="${computerMove}-emoji.png" alt="" class="moves">
Computer`;
    

    

    // alert(`You picked ${playerMove} and Computer picked ${computerMove} so ${result}
    // \n Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`);
    
  }

function resetScore(){
  score.wins = 0;
  score.loses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScore();
  document.querySelector('.js-moves').innerHTML = '';
  document.querySelector('.js-result').innerHTML = '';
}

function updateScore(){
  document.querySelector('.js-score').innerHTML = ` Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
}

let isAutoPlaying = false;
let interVAlid ;

 function autoPlay(){
  if(!isAutoPlaying){
    interVAlid = setInterval(function(){
      const playerMove = pickComputerMove();
      checkResult(playerMove);
     }, 1000);
     isAutoPlaying = true;
     document.querySelector('.autobtn').innerHTML = 'Stop Autoplay';
  }
  else{
    clearInterval(interVAlid);
    isAutoPlaying = false;
    document.querySelector('.autobtn').innerHTML = 'Autoplay';
  }
   
 }




