# BextJS

BextJS is a boring text in-browser console, written in JavaScript. There is a large text field representing the terminal "screen" and a text field for user input.

To set up, create an HTML file with the following content:

    <!DOCTYPE html>
    <html lang="en">
    <body>
    <meta charset="utf-8"/>

    <textarea id="textOutput" readonly></textarea><br />
    <input id="textInput" readonly />

    <script src="bext.js"></script>
    <link rel="stylesheet" href="bext.css">

    <script>
    async function main() {
        // Your text program goes here.
    }
    main();
    </script>

    </body>
    </html>

Place the `bext.js` and `bext.css` in the same folder as your HTML file.

Bext supplies `print()`, `input()`, and `sleep()` functions that are similar to Python's functions.

# print()

The `print()` function makes text appear in the "screen" text field. A newline is automatically appended to the end of this text. Multiple arguments can be passed to `print()`. No separation character will be inserted in between these arguments. If the last argument to `print()` is a blank string, the automatic newline character is supressed.

# input()

The `input()` function focuses the keyboard input into the user input text field. The user can type text here, and upon pressing enter, it's returned from the `input()` call. This text is also automatically displayed in the "screen" text field.

Note that you must always insert the `await` keyword before the call to `input()`.

# sleep()

The `sleep()` function is passed the number of seconds it should pause before returning.

Note that you must always insert the `await` keyword before the call to `sleep()`.

# clear()

The `clear()` function erases all the text in the "screen" text field.

# Examples

See the demo.html and guess.html files in this repo for example usage.

You can also check out this [live demo](https://inventwithpython.com/files/guess.html).
