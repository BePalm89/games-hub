import './Wordle.css';

export const Wordle = () => {

    const container = document.createElement('div');
    container.classList.add('wordle-container');

    createGuessResults(container);
    createFormInputGuess(container);

    return container.outerHTML;
}

const createFormInputGuess = (container) => {

    const form = document.createElement('form');
    form.id = "guess-form";
    
    const label = document.createElement('label');
    label.htmlFor = 'guess-input';
    label.innerText = 'Enter Guess:';

    const input = document.createElement('input');
    input.id = 'guess-input';
    input.type = 'text';
    input.required = true;
    input.minLength = 1;
    input.maxLength = 5;

    form.appendChild(label);
    form.appendChild(input);

    container.appendChild(form);
}

export const createGuessResults = (container,form, guess) => {
    
    const containerGuess = document.createElement('div');
    containerGuess.classList.add('guess-container');
    
    const p = document.createElement('p');
    if(guess) {
        p.innerHTML = `${guess}`;
    }
    
    containerGuess.appendChild(p);

    container.insertBefore(containerGuess, form);
}

// 2. Keeping track of guesses

/* 
When the user submits their guess, that value should be rendered within this new component.
There should be no key warnings in the console!
*/

// 3. Guess slots

/* 
Create a new Guess component. 6 instances should be rendered at all times, no matter how many guesses have been submitted.
The Guess component should render 5 spans, each with the class of cell.
Each cell should contain a letter, if the Guess instance has been given a value. If not, the cell should be blank.
Use the NUM_OF_GUESSES_ALLOWED constant, when needed.
No key warnings in the console.
*/

// 4. Game logic

/* 
Import the checkGuess function from /src/game-helpers.js, and use it to validate each of the user's guesses
When rendering the letters in the Guess component, apply the letter's status to the cell element.
"Empty" guess slots should have the same markup as before: <span class="cell"></span>.
*/

// 5. winning and losing

/*
If the user wins the game, a happy banner should be shown.
If the user loses the game, a sad banner should be shown
When the game is over, the text input should be disabled.
It's up to you to decide how to structure the banner! Feel free to create new component(s) if you think it's warranted.
*/

// 6. visual keyboard

/*
Render 3 rows of letters at the bottom of the screen
The colors of each letter should match the colors shown in the game board:
Correct letters should have a green background and white text
Misplaced letters should have a yellow background and white text
Incorrect letters should have a dark gray background and white text
Unused letters should have a light gray background and black text
No need to include "Enter" and "Backspace" keys.
Don't worry too much about the styling, trying to get the alignment to look exactly like a real keyboard.
*/