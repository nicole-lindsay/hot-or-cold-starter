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
    console.log(randomNumber);

    /*---New game button---*/
    $(".new").click(function() {
        event.preventDefault();
        /*needs to revert #feedback, #count, #guessList to original values, and change random number*/
    });

    $("form").on("submit", function(event) {
        event.preventDefault();
    });

    /*Guess button, increment #count by one*/
    $("#guessButton").click(function() {
        event.preventDefault();
        var userGuess = $("#userGuess").val();
        var difference = Math.abs(randomNumber - userGuess);
        $("#guessList").append("<li>" + userGuess + "</li>");
        $("#userGuess").val("");
        if (userGuess == randomNumber) {
            $("#feedback").text("Winner winner chicken dinner!");
        } else if (difference >= 1 && difference <= 30) {
            $("#feedback").text("Hot!");
        } else if (difference >= 31 && difference <= 70) {
            $("#feedback").text("Tepid");
        } else {
            $("#feedback").text("Cold!");
        }
    });
});