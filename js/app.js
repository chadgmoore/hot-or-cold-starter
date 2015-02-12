var secretNum;
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
  	secretNum = newGame();

  	// Get Guess from user	
	$('#guessButton').click(function(event){
		event.preventDefault();
  		var guessedNumber = $('#userGuess').val();
  		$('#guessList').append(guessedNumber + ' ');
  		numberOfGuesses++;
  		$('#count').empty().append(numberOfGuesses);
  		evaluateGuess(guessedNumber, secretNum);  		  		

   	});

});

var min = 1;
var max = 100;

function newGame() {
		var newNum = getSecretNumber(min, max);
		$('#guessList').empty();
		$('#count').empty().append('0');
		$('#feedback').text("Make your Guess!");
		$('#userGuess').text(' ');//not working
		return newNum;
	};

function getSecretNumber(min, max) {
		var secretNumber = Math.floor(Math.random() * (max - min)) + min;
		return secretNumber;
	};


function evaluateGuess(guessedNumber, secretNum){
		if (!isNaN(guessedNumber) && (guessedNumber % 1 == 0) && (guessedNumber >= 1 && guessedNumber <= 100 )) {
			// console.log('secret number is ' + secretNum);
			// console.log(guessedNumber + ' is validated guessedNumber');
			valueBetween = guessedNumber - secretNum; 
			absVal = Math.abs(valueBetween)
			if (absVal >= 50)
			{
				$('#feedback').text('Ice Cold!!');
			}
			if (absVal >= 30 && absVal <= 49)
			{
				$('#feedback').text('Cold!');
			}
			if (absVal >= 20 && absVal <=29)
			{
				$('#feedback').text('Warm!');
			}
			if (absVal >= 10 && absVal <=19)
			{
				$('#feedback').text('Hot!!');
			}
			if (absVal >= 5 && absVal <=9)
			{
				$('#feedback').text('Burning Hot!!');
			}
			if (absVal >= 1 && absVal <=4)
			{
				$('#feedback').text('SCORCHING HOT!');
			}
			if (absVal == 0)
			{
				$('#feedback').text('Correct! \n' + secretNum + ' was the Secret Number!');
			}			
			// console.log(valueBetween+ ' is value bewtween' + absVal + ' is abs val');
		}
		
	};




