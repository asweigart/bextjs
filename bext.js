/*
BextJS by Al Sweigart al@inventwithpython.com
https://github.com/asweigart/bextjs
*/

// Clear the output and input text fields:
document.getElementById("textOutput").value = "";
document.getElementById("textInput").value = "";

function print() {
    const textOutputElem = document.getElementById("textOutput");
    var args = Array.prototype.slice.call(arguments);
    var newline = "\n";
    if (args.length !== 1 && args[args.length - 1] == "") {
        // If the last argument is a blank string, suppress the newline character we automatically add to the end.
        newline = "";
    }

    textOutputElem.value = textOutputElem.value + args.join("") + newline;
    textOutputElem.scrollTop = textOutputElem.scrollHeight; // Scroll to the bottom of the text field.
}

function input() {
    // Wait for the user to type something into the input text field and press Enter. Return this string.
    const textInputElem = document.getElementById("textInput");
    textInputElem.readOnly = false;
    textInputElem.focus();

    return new Promise((resolve) => {
        function handleKeypress(e) {
            if (e.key === "Enter") {
                print(e.target.value);
                resolve(e.target.value);
                e.target.value = "";  // Blank the input text field
                textInputElem.removeEventListener('keypress', handleKeypress)
                textInputElem.readOnly = true;
            }
        }
        textInputElem.addEventListener('keypress', handleKeypress)
    });
}

function sleep(delayInSeconds) {
    // Pause the program.
    return new Promise(resolve => setTimeout(resolve, delayInSeconds * 1000));
}

function clear() {
    // Erase all the text in the textOutput text field:
    document.getElementById("textOutput").value = "";
}
