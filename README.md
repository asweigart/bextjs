# BextJS

THIS MODULE IS OBSOLETE. It has been renamed and updated to Textarea_Terminal_JS which you can find at https://github.com/asweigart/textarea_terminal_js This repo will not be updated and only remains as a historical archive. Please use Textarea_Terminal_JS instead.

BextJS is a boring text in-browser console, written in JavaScript. There is a large text field representing the terminal "screen" and a text field for user input.

To set up, create an HTML file with the following content:

    <textarea id="bextOutput" readonly></textarea><br />
    <input id="bextInput" readonly />

    <script src="bext.js"></script>
    <link rel="stylesheet" href="bext.css">

    <script>
    async function main() {
        // input() and sleep() must be called from an async function.
        print('Hello, what is your name?')
        let name = await input();  // input() requries `away`
        print('It is...');
        await sleep(1);  // sleep() requires `await`
        print('...GOOD to meet you, ', name);
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

See the demos in this repo or online:

* [Cho Han Game](https://inventwithpython.com/bextjsdemos/chohan.html)
* [Guess the Number](https://inventwithpython.com/bextjsdemos/guess.html)
* [Cube Wall Animation](https://inventwithpython.com/bextjsdemos/cubewall.html)
* [Zigzag Animation](https://inventwithpython.com/bextjsdemos/zigzag.html)

BextJS is used for all the demos at [The Scroll Art Museum](https://scrollart.org).


Support
-------

If you find this project helpful and would like to support its development, [consider donating to its creator on Patreon](https://www.patreon.com/AlSweigart).
