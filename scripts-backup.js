var playerMove = document.getElementById(this);

element.addEventListener(this, testFunction);

//The function below tests the onclick feature on the page.
function clickTest(){
	console.log("Clicked");
}

function check(){
	//variable to contain the array of computer's rock paper scissors moves.
	var computerMoves = ["rock","paper","scissors"];

	/* Line below generates a random selection of an item 
	contained within the above Array.*/
	var compRandMove = Math.floor(Math.random() * computerMoves.length);

	//Line below returns the randomly generated string created by "compRandMove".
	return computerMoves[compRandMove];
}

function playMove(){
	/*If the player's selection id is equal "rock" tab AND computer's 
	generated move is equal to "scissors" display the relevent text
	ELSE
	/*If the player's selection id is equal "rock" tab AND computer's 
	generated move is equal to "paper" display the relevent text*/
	if(playerMove == "rock" && computerMoves == "scissors"){
		alert("Player Wins! Rock crushes Scissors")
	}else if(playerMove == "rock" && computerMoves == "paper"){
		alert("Computer Wins! Paper smothers Rock!")
	}
	/*If the player's selection id is equal "paper" tab AND computer's 
	generated move is equal to "rock" display the relevent text
	ELSE
	If the player's selection id is equal "paper" tab AND computer's 
	generated move is equal to "scissors" display the relevent text*/
	if(playerMove == "paper" && computerMoves == "rock"){
		alert("Player Wins! Paper beats Rock!")
	}else if(playerMove == "paper" && computerMoves == "scissors"){
		alert("Computer Wins! Scissors slashes Paper!")
	}
	/*If the player's selection id is equal "scissors" tab AND computer's 
	generated move is equal to "paper" display the relevent text
	ELSE,
	If the player's selection id is equal "scissors" tab AND computer's 
	generated move is equal to "rock" display the relevent text*/
	if(playerMove == "scissors" && computerMoves == "paper"){
		alert("Player Wins! Scissors Slices Paper!")
	}else if(playerMove =="scissors" && computerMoves == "rock"){
		alert("Computer Wins! Rock obliterates Scissors!")
	}
	/*If the player's selection id is equal to the string value of computer's 
	generated move display the relevent text*/
	if(playerMove == computerMoves){
	alert("Draw! Try Again")
	}
}