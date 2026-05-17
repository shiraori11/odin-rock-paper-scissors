console.log("Hello World!");

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3) + 1;
  return randomChoice;
}

console.log(getComputerChoice());
