console.log("Hello World!");

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3) + 1;
  return showChoiceAsString(randomChoice);
}

function showChoiceAsString(choice) {
  switch(choice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissor";
  }
}

function getHumanChoice() {
  const humanInput = prompt("Pick a choice '1' for Rock, '2' for Paper, '3' for Scissor \nEnter a digit: ");
  return humanInput;
}

console.log(getComputerChoice());
console.log(getHumanChoice());
