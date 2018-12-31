function check() {

    var question1 = document.getElementById("textbox").value;
    var question2 = document.getElementsByName("question2").value;
    var question3 = document.getElementsByName("question3").value;
    var correct = 0;
    
    console.log("check");

    if (question1 == "Surfing") {
        correct++;

        if (question2 == "Pisa, Italy") {
            correct++;
        }
        if (question3 == "France") {
            correct++;
        }

        var message = ["Good job!", "That's just okay", "You need to do better"];

        var range;
        if (correct < 3) {
            range = 2;
        }

        if (correct > 0 && correct < 3) {
            range = 1;
        }

        if (correct > 2) {
            range = 0;
        }

        document.getElementById("after_submit").style.visibility = "visible";

        document.getElementById("message").innerHTML = message [range];
        document.getElementById("number_correct").innerHTML = "You got " + correct + "correct.";
    }
}