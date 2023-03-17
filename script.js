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
