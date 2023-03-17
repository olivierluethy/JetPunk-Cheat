# JetPunkFastTyping-Cheat
Contains cheats to manipulate the game and make it faster.

## Fast Typing 1 to 100
### First Attempt:
On the first version I tried that the code manually enters the value into the input field, but it didn't work.
It entered the numbers one by one in the input. You saw the number inside of it, but it didn't do something.
```javascript
// This function is called cheater
function cheater() {
    // Initialize a variable called i to 1
    let i = 1;
    // Get the input field element by its id and assign it to a constant variable called inputField
    const inputField = document.getElementById("txt-answer-box");

    // Create a function called updateInput that updates the input field value and increments i
    const updateInput = () => {
        inputField.value = i++;
        // Check if i is less than or equal to 100
        if (i <= 100) {
            // If true, set a timeout of 100ms to call updateInput again
            setTimeout(updateInput, 100);
        }
    };

    // Call updateInput to start updating the input field value
    updateInput();
}

cheater();
```
### Final Attempt:
So I rewrote the code so that it simulates the input of the user in an input field.
To simplify it: It simulate that the input field thinks that someone has entered something in the input field, but in reality it was the function who did that.

```javascript
// This function is called cheater
function cheater() {
    // Set i to 1
    let i = 1;
    // Get the input field element by its id and assign it to a constant variable inputField
    const inputField = document.getElementById("txt-answer-box");
    // Set an interval that executes the following function every 1000 milliseconds
    setInterval(() => {
        // Set the value of the input field to the value of i
        inputField.value = i;
        // Create a new 'input' event and dispatch it on the input field
        const event = new Event('input', {
            bubbles: true
        });
        inputField.dispatchEvent(event);
        // Increment i
        i++;
        // If i is greater than 100, clear the interval
        if (i > 100) clearInterval();
    }, 0.0000000000000000000000005);
}
cheater()
```
