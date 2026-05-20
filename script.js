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
//
// const playRound = function(playerChoice, computerChoice) {
//   const whoScored = checkWhoScore(playerChoice, computerChoice)
//   switch(whoScored) {
//     case "player":
//       break;
//     case "computer":
//       break;
//     case "tie":
//       break;
//   }
// }

const playerChoiceButtons = document.querySelectorAll(".playerChoiceContainer button");
const computerChoicePara = document.querySelector("#computerChoice");
const playerCurrentScore = document.querySelector("#playerScore");
const computerCurrentScore = document.querySelector("#computerScore");
const tieCurrentScore = document.querySelector("#tieScore");

playerChoiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    const computerChoice = getComputerChoice();
    
    computerChoicePara.textContent = computerChoice;
    
    const getRoundWinner = checkWhoScore(playerChoice, computerChoice);
    
    if (getRoundWinner === "player") {
      playerCurrentScore.textContent += 1;
    }
  });
});
