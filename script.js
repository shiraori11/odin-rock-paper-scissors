const getComputerChoice = function () {
  const randomChoice = Math.floor(Math.random() * 3) + 1;
  return showComputerChoiceAsString(randomChoice);
}

const showComputerChoiceAsString = function(choice) {
  switch(choice) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissor";
      break;
  }
}

const checkWhoScore = function(player, computer) {
  if (player === computer){
    return "tie";
  } else if (player === "rock" && computer === "scissor") {
    return "player";
  } else if (player === "paper" && computer === "rock") {
    return "player";
  } else if (player === "scissor" && computer === "paper") {
    return "player";
  } else {
    return "computer";
  }
}

const playerChoiceButtons = document.querySelectorAll(".playerChoiceContainer button");
const computerChoiceSpan = document.querySelector("#computerChoice");
const playerChoiceSpan = document.querySelector("#playerChoice")
const playerCurrentScore = document.querySelector("#playerScore");
const computerCurrentScore = document.querySelector("#computerScore");
const tieCurrentScore = document.querySelector("#tieScore");

playerChoiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    const computerChoice = getComputerChoice();
    
    computerChoiceSpan.textContent = computerChoice;
    playerChoiceSpan.textContent = playerChoice;
    
    const getRoundWinner = checkWhoScore(playerChoice, computerChoice);
    const playerScore = parseInt(playerCurrentScore.textContent);
    const computerScore = parseInt(computerCurrentScore.textContent);
    const tieScore = parseInt(tieCurrentScore.textContent);
    
    if (getRoundWinner === "player") {
      playerCurrentScore.textContent = playerScore + 1;
    } else if (getRoundWinner === "computer") {
      computerCurrentScore.textContent = computerScore + 1;
    } else {
      tieCurrentScore.textContent = tieScore + 1; 
    }
  });
});
