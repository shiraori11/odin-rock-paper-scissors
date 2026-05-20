console.log("Hello World!");

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3) + 1;
  return showComputerChoiceAsString(randomChoice);
}

function showComputerChoiceAsString(choice) {
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

function getPlayerChoice(playerChoice, computerChoice) {
  const whoScored = checkWhoScore(playerChoice, computerChoice)
  switch(whoScored) {
    case "player":
      break;
    case "computer":
      break;
    case "tie":
      break;
  }
}

function checkWhoScore(player, computer) {
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
