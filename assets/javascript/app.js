// in the following am creating the function call check. check is looking for variable call quize.
function check() {


    //var firstCountry = document.quiz.question1.value;
    var firstCountry = document.getElementById("textbox").value;
    var secondCountry = document.quiz.question2.value;
    var thirdCountry = document.quiz.question3.value;
    var wins = 0;
    var losses = 0;
    // over here run the if condition and else condition.
    // if user guess the answer correct i t will increment their chanc

    if (firstCountry == "Surfing") {
        wins++;
    }
    //Else it will alert user you have incorrect answer 
    else {
        losses++;
        alert("You have losses incorrect answers");
    }

    if (secondCountry == "Pisa, Italy") {
        wins++;
    }
    else {
        losses++;
        alert("You have incorrect answer");
    }

    if (thirdCountry == "France") {
        wins++;
    }
    else {
        alert("You have incorrect answer");
    }


    //Am setting up to an Array to loop through the message.
    var message = ["fntasic!", "excellent", "You can do it better"];

    // calling this variable score range.
    var scoreRange;
    //check to see if the (if/esle condotion)  is correct then run this. 

    if (wins < 3) {
        scoreRange = 2;
    }

    if (wins> 0 && wins < 3) {
        scoreRange = 2;
    }

    if (wins > 2) {
        scoreRange = 0;
    }

    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = message["scorerange"];
    document.getElementById("number_correct").innerHTML = "You got " + correct + "correct.";

}