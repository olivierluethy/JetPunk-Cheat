# JetPunk-Cheat
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
## Countries of the World Quiz
The mechanism is the same. It does actually the same as the first program. It also simulates the input of the user in the user input. But difference is, that it enters all the countries in the world instead of numbers from 1 to 100.

```javascript
function cheater() {
  // Get an array of all the country names
  const countries= ["Kiribati", "Bora-Bora", "French Polynesia", "Hawaii", "Marshall Islands", "Nauru", "Antarctica", "Guam", "Vatican City", "Relong", "Vanuatu", "Solomon Islands", "Tuvalu ", "Federated States of Micronesia","Palau", "Kosovo", "san marino", "Sao Tome and Principe" , "Cape Verde", "Seychelles", "Comoros", "North Korea", "Kirgisistan", "Myanmar", "Central African Republic", "South Sudan", "Somalia", "Eritrea", "Canada", "USA", "Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
  // Set i to 0
      
  let i = 0;
  // Get the input field element by its id and assign it to a constant variable inputField
  const inputField = document.getElementById("txt-answer-box");
  // Set an interval that executes the following function every 1000 milliseconds
  setInterval(() => {
    // Set the value of the input field to the current country name
    inputField.value = countries[i];
    // Create a new 'input' event and dispatch it on the input field
    const event = new Event('input', {
      bubbles: true
    });
    inputField.dispatchEvent(event);
    // Increment i
    i++;
    // If i is greater than or equal to the length of the countries array, clear the interval
    if (i >= countries.length) clearInterval();
  }, 1);
}
cheater();
```
