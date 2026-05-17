console.log("Hello World!");

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3) + 1;
  return showChoiceAsString(randomChoice);
}

function showChoiceAsString(choice) {
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

function getHumanChoice() {
  const humanInput = prompt("Rock, Paper, or Scissors? ");
  return humanInput;
}

function playRound(player, computer) {
  let playerToLower = player.toString().toLowerCase();

  if (playerToLower === computer) {
    console.log("Tie!");
    return;
  } else if (playerToLower === "rock" && computer === "scissor") {
    console.log("You Win! Rock beats Scissor!");
    return;
  } else if (playerToLower === "paper" && computer === "rock") {
    console.log("You Win! Paper beats Rock!");
    return;
  } else if (playerToLower === "scissor" && computer === "paper") {
    console.log("You Win! Scissor beats Paper!");
    return;
  } else {
    console.log(`You Loss! ${capitalize(computer)} beats ${capitalize(playerToLower)}`);
    return;
  }
}

function capitalize(text) {
  const convertTextToString = text.toString();
  return convertTextToString.charAt(0).toUpperCase() + convertTextToString.slice(1);
}

playRound(getHumanChoice(), getComputerChoice());
