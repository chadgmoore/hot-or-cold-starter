$(document).ready(function(){

	var numberOfGuesses = 0;

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	// Make new game from UI component
  	$(".new").click(newGame);

  	// Start New Game on page load
  	newGame();

   	function newGame() {
		getSecretNumber(min, max);
		console.log('starting new game');
	};

  	// Get Guess from user	
	$('#guessButton').click(function(event){
		event.preventDefault();
  		var guessedNumber = $('#userGuess').val();
  		$('#guessList').append(guessedNumber + ' ');
  		numberOfGuesses++;
  		$('#count').empty().append(numberOfGuesses);
  		// evaluateGuess(guessedNumber, secretNum);  		  		

   	});

});

var min = 1;
var max = 100;


function newGame() {
		getSecretNumber(min, max);
		console.log('starting new game');
	};

function getSecretNumber(min, max) {
		var secretNum = Math.floor(Math.random() * (max - min)) + min;
		console.log('secret number is ' + secretNum);
		return secretNum;
	};


function evaluateGuess(guessedNumber, secretNum){
		// get guess from name=userGuess

		// make sure its a number from 1-100

		// hot or cold info displayed in div#feedback. 
		// div#feedback is set to “Make Your Guess!” at newGame
		// return the guessed number to id=guessList 
		// increment id=count with each guess
		console.log(guessedNumber, secretNum);
		console.log("I'm Evaluating the guess, yo.");
	};