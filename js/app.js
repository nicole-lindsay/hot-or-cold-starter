var guessCount = 0;
$(document).ready(function() {

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

    /*variables reference*/
    var randomNumber = Math.floor((Math.random() * 100) + 1);
    console.log("The random number is " + randomNumber);


    /*---New game button---*/
    $(".new").click(function() {
        event.preventDefault();
        $("#feedback").html("Make your Guess!");
        $("#count").html(0);
        guessCount = 0;
        $("#guessList li").remove();
        randomNumber = Math.floor((Math.random() * 100) + 1);
        console.log("The random number is " + randomNumber);
    });

    /*Guess button*/
    //$("#guessButton").click(function(event) {
    //$("form").on("submit", function(event) {
    $("#guessButton").on("click", function(event) {
        event.preventDefault();
        var userGuess = $("#userGuess").val();
        var difference = Math.abs(randomNumber - userGuess);
        $("#userGuess").val("");
        if (isNaN(userGuess)) {
            $("#feedback").text("No dice, I only accept numbers!");
        } else if (userGuess < 0 && userGuess > 100) {
            $("#feedback").text("Only numbers 1-100!");
        } else {
            guessCount++
            $("#count").text(guessCount);
            $("#guessList").append("<li>" + userGuess + "</li>");
            if (userGuess == randomNumber) {
                $("#feedback").text("Winner winner chicken dinner!");
            } else if (difference >= 1 && difference <= 30) {
                $("#feedback").text("Hot!");
            } else if (difference >= 31 && difference <= 70) {
                $("#feedback").text("Tepid");
            } else {
                $("#feedback").text("Cold");
            }
        }
    });
});