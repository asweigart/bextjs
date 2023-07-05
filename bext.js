/*
BextJS by Al Sweigart al@inventwithpython.com
https://github.com/asweigart/bextjs
*/

// TODO - create BextJS objects so pages can have multiple terminals.
// TODO - add color? add goto()? Change size? Print emojis?
/*
When calling input(), you must call it with await:
    await input();
Otherwise, the entire page will freeze. Also, any function that calls input()
must itself be called with an await or else it will be skipped over.

When calling sleep(), you must call it with await:
    await sleep(2);
Or else it will not pause the program. Also, any function that calls input()
must itself be called with an await or else the program won't pause.

(But main doesn't have to be called with await? Also, when is async needed in the function definition?)
*/

"use strict";


// These are the global print(), input(), clear(), and sleep() functions:
function print() {
    const bextOutputElem = document.getElementById("bextOutput");

    if (bextOutputElem === null) {
        throw "print() has been called but bextOutput element does not exist.";
    }
    var args = Array.prototype.slice.call(arguments);
    var newline = "\n";
    if (args.length !== 1 && args[args.length - 1] == "") {
        // If the last argument is a blank string, suppress the newline character we automatically add to the end.
        newline = "";
    }

    bextOutputElem.value = bextOutputElem.value + args.join("") + newline;
    bextOutputElem.scrollTop = bextOutputElem.scrollHeight; // Scroll to the bottom of the text field.
}

function input() {
    // Wait for the user to type something into the input text field and press Enter. Return this string.
    const bextInputElem = document.getElementById("bextInput");

    if (bextInputElem === null) {
        throw "input() has been called but bextInput element does not exist.";
    }

    bextInputElem.readOnly = false;
    bextInputElem.focus();

    return new Promise((resolve) => {
        function handleKeypress(e) {
            if (e.key === "Enter") {
                print(e.target.value);
                resolve(e.target.value);
                e.target.value = "";  // Blank the input text field
                bextInputElem.removeEventListener('keypress', handleKeypress)
                bextInputElem.readOnly = true;
            }
        }
        bextInputElem.addEventListener('keypress', handleKeypress)
    });
}

function sleep(delayInMilliseconds) {
    // Pause the program.
    return new Promise(resolve => setTimeout(resolve, delayInMilliseconds));
}

function clear() {
    // Erase all the text in the bextOutput text field:
    const bextOutputElem = document.getElementById("bextOutput");
    if (bextOutputElem === null) {
        throw "clear() has been called but bextOutput element does not exist.";
    }
    document.getElementById("bextOutput").value = "";
}

// Clear the output and input text fields:
if (document.getElementById("bextOutput") !== null) {
    clear();
}






class Bext {
    constructor(bextOutput=null, bextInput=null) {
        this.bextOutput = bextOutput;
        this.bextInput = bextInput;

        this.bextOutputElem = document.getElementById(this.bextOutput);
        this.bextInputElem = document.getElementById(this.bextInput);

        if (this.bextOutputElem !== null) {
            this.bextOutputElem.readOnly = true;
        }
        if (this.bextInputElem !== null) {
            this.bextInputElem.readOnly = true; 
        }
        this.clear();
    }

    print() {
        if (this.bextOutputElem === null) {
            throw "print() has been called but this.bextOutputElem does not exist.";
        }

        let args = Array.prototype.slice.call(arguments);
        let newline = "\n";
        if (args.length !== 1 && args[args.length - 1] == "") {
            // If the last argument is a blank string, suppress the newline character we automatically add to the end.
            newline = "";
        }

        this.bextOutputElem.value = this.bextOutputElem.value + args.join("") + newline;
        this.bextOutputElem.scrollTop = this.bextOutputElem.scrollHeight; // Scroll to the bottom of the text field.
    }

    input() {
        if (this.bextInputElem === null) {
            throw "input() has been called but this.bextInputElem does not exist.";
        }

        // Wait for the user to type something into the input text field and press Enter. Return this string.
        this.bextInputElem.readOnly = false;
        this.bextInputElem.focus();

        let that = this;
        return new Promise((resolve) => {
            function handleKeypress(e) {
                if (e.key === "Enter") {
                    that.print(e.target.value);
                    resolve(e.target.value);
                    e.target.value = "";  // Blank the input text field
                    that.bextInputElem.removeEventListener('keypress', handleKeypress)
                    that.bextInputElem.readOnly = true;
                }
            }
            this.bextInputElem.addEventListener('keypress', handleKeypress)
        });
    }

    // TODO - Does this delay all JS code on the page?
    sleep(delayInMilliseconds) {
        // Pause the program.
        return new Promise(resolve => setTimeout(resolve, delayInMilliseconds));
    }

    clear() {
        // Erase all the text in the output text field:
        if (this.bextOutputElem === null) {
            throw "clear() has been called but this.bextOutputElem does not exist.";
        }
        this.bextOutputElem.value = "";
    }

}


