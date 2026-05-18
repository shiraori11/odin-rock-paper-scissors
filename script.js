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

function playRound() {
  const player = getHumanChoice();
  const computer = getComputerChoice();

  let playerToLower = player.toString().toLowerCase();

  if (playerToLower === computer) {
    console.log("Tie!");
    return;
  } else if (playerToLower === "rock" && computer === "scissor") {
    console.log("You Win! Rock beats Scissor!");
    return "player";
  } else if (playerToLower === "paper" && computer === "rock") {
    console.log("You Win! Paper beats Rock!");
    return "player";
  } else if (playerToLower === "scissor" && computer === "paper") {
    console.log("You Win! Scissor beats Paper!");
    return "player";
  } else {
    console.log(`You Loss! ${capitalize(computer)} beats ${capitalize(playerToLower)}`);
    return "computer";
  }
}

function capitalize(text) {
  const convertTextToString = text.toString();
  return convertTextToString.charAt(0).toUpperCase() + convertTextToString.slice(1);
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  
  const roundOne = playRound();
  const roundTwo = playRound();
  const roundThree = playRound();
  const roundFour = playRound();
  const roundFive = playRound();

  // Play five rounds of Rock, Paper, Scissors
  if (roundOne == "player") {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
  if (roundTwo == "player") {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
  if (roundThree == "player") {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
  if (roundFour == "player") {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
  if (roundFive == "player") {
    humanScore += 1;
  } else {
    computerScore += 1;
  }

  // Tell the player who wins
  if (humanScore == computerScore) {
    console.log("It's a Tie! No one wins or lose!");
  } else if (humanScore < computerScore) {
    console.log("Player wins!");
  } else {
    console.log("Computer wins!");
  }
}

playGame();
