
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*random number generator*/
  	Math.floor((Math.random() * 100) + 1);

  	/*---New game button---*/
  	$(".new").click(function(){
  		/*needs to revert #feedback, #count, #guessList to original values, and change random number*/ 
  	});

  	/*Guess button*/
  	$("#guessButton").click(function(){
  		/*needs to add <li> to #guesslist, increment #count by one, change #feedback to hot/cold or you win*/
  	});
});