function IsEnter() {
    var TextBox_val = document.getElementById("InputBox").value;

    if (TextBox_val != "") {
        if (event.keyCode == 13)
            main();
    }
}

function main() {
    var TextBox_val = document.getElementById("InputBox").value;
    var ResponseText_val = document.getElementById("ResponseText");

    var FormatInput = TextBox_val.toLowerCase().trim();

    if (FormatInput.includes("hi") || FormatInput.includes("hello"))
        ResponseText_val.innerHTML = "Hello!";

    else if (FormatInput.includes("how are you"))
        ResponseText_val.innerHTML = "I'm fine! Thanks for asking!";

    else if (FormatInput.includes("open google")) {
        ResponseText_val.innerHTML = "Opening Google";
        window.open("https://www.google.com", "_blank");
    }

    else if (FormatInput.includes("open youtube")) {
        ResponseText_val.innerHTML = "Opening YouTube";
        window.open("https://www.youtube.com", "_blank");
    }

    else if (FormatInput.includes("open onestate")) {
        ResponseText_val.innerHTML = "Opening Onestate Coding on YouTube";
        window.open("https://www.youtube.com/channel/UCrphqZNc_r-KsOTeTKH5hwA", "_blank");
    }

    else if (FormatInput.includes("open light-lens")) {
        ResponseText_val.innerHTML = "Opening Light-Lens on Github";
        window.open("https://github.com/Light-Lens", "_blank");
    }

    // Check if the input is a math expression
    else if (isMathExpression(FormatInput)) {
        try {
            // Evaluate the math expression
            var result = eval(FormatInput);
            ResponseText_val.innerHTML = "Result: " + result;
        } catch (error) {
            ResponseText_val.innerHTML = "Error in the math expression 😔";
        }
    }

    else
        ResponseText_val.innerHTML = "Sorry, I can't understand you 😔";
}

// Function to check if the input is a math expression
function isMathExpression(input) {
    // Regular expression to check for valid math expressions
    var mathExpressionRegex = /^[\d+\-*/%().^ ]+$/;
    return mathExpressionRegex.test(input);
}