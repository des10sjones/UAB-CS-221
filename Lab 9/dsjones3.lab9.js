function playGame() {
  const user = prompt('Enter Rock, Paper, or Scissors): ').toLowerCase();

  if (isValid(user)) {
      const computer = getComputerPick();

      console.log( " user chose : " +user)
      console.log( " computer chose : " +computer)
      

   
      const result = determineWinner(user, computer);
      console.log(result)

  
      
  } else {
      alert('Invalid choice. Please enter Rock, Paper, or Scissors.');
      playGame();
  }
}

function isValid(choice) {
  return choice === 'rock' || choice === 'paper' || choice === 'scissors';
}

function getComputerPick() {
  const choices = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function determineWinner(user, computer) {
  if (user === computer) {
      return "It's a tie!";
  } else if (
      (user === 'rock' && computer === 'scissors') ||
      (user === 'scissors' && computer === 'paper') ||
      (user === 'paper' && computer === 'rock')
  ) {
      return 'User wins!';
  } else {
      return 'Computer wins!';
  }
}

