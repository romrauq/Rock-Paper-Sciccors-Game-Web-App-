const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");
const scoreboard = {
  player: 0,
  computer: 0,
};

// Play game
function play(e) {
  restart.style.display = "inline-block";
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);

  showWinner(winner, computerChoice);
  clearModal(e);
}

//Get computer's choice
function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.34) {
    return "rock";
  } else if (rand <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

//Get game winner
function getWinner(player, computer) {
  if (player === computer) {
    return "draw";
  } else if (player === "rock" && computer === "paper") {
    return "computer";
  } else {
    return "player";
  }

  if (player === "paper" && computer === "scissors") {
    return "computer";
  } else {
    return "player";
  }

  if (player === "scissors" && computer === "rock") {
    return "computer";
  } else {
    return "player";
  }
}

//Show winner
function showWinner(winner, computerChoice) {
  if (winner === "player") {
    //Increase player score
    scoreboard.player++;

    //Show winning modal result
    result.innerHTML = `
		<h1 class='text-win'>You Win</h1>
		<img src="resources/img/${computerChoice}.png" class='img ${computerChoice}'>
		<p> Computer Chose <strong>${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }</strong></p>
		`;
  } else if (winner === "computer") {
    scoreboard.computer++;

    //Show losing modal result
    result.innerHTML = `
		<h1 class='text-lose'>You Lose</h1>
		<img src="resources/img/${computerChoice}.png" class='img ${computerChoice}'>
		<p> Computer Chose <strong>${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }</strong></p>
		`;
  } else {
    //Show drawing modal result
    result.innerHTML = `
		<h1 class='text-draw'>Its a Draw</h1>
		<img src="resources/img/${computerChoice}.png" class='img ${computerChoice}'>
		<p> Computer Chose <strong>${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }</strong></p>
		`;
  }

  //Show score
  score.innerHTML = `
	<p>Player: ${scoreboard.player}</p>
	<p>Computer: ${scoreboard.computer}</p>
	`;

  //Displaying the modal
  modal.style.display = "block";
}

function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
	<p>Player: 0</p>
	<p>Computer: 0</p>
	`;
}

//Clear Modal
function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

// Event Listeners
choices.forEach((choice) => choice.addEventListener("click", play));
window.addEventListener("click", clearModal);
// restart.addEventListener('click', restartGame);
