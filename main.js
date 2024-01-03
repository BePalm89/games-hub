import './style.css';
import { Navbar } from './components/shared/Navbar/Navbar';
import { ModalRules }  from './components/shared/ModalRules/ModalRulels';
import { router, addListeners} from './router/router';
import { goBackToDashboard } from './utils';
import { createGuessResults } from './components/pages/Wordle/Wordle';
// Create the application
const divApp = document.querySelector('#app');

const mainElement = document.createElement('main');

divApp.innerHTML += Navbar();

divApp.appendChild(mainElement);

// Add router and event listener
router();
addListeners();

// Dashboard button
const goToDashboardButton = document.querySelector('.btn-back');

if (goToDashboardButton) goBackToDashboard(goToDashboardButton);

// Open and close modal for rules
const rulesButton = document.querySelector('.btn-rules');

let isModalOpen = false;

const handleOpenModal = () => {
   
    if(!isModalOpen) {
        mainElement.innerHTML += ModalRules();
        const modal = document.querySelector('#modal');
        modal.style.display = 'flex';
        isModalOpen = true;
    }
}

if(rulesButton) {
    rulesButton.addEventListener('click', handleOpenModal)
}


const outsideClick = (event) => {

    if (isModalOpen && modal && event.target === modal) {
        modal.style.display = 'none';
        mainElement.removeChild(modal);
        isModalOpen = false;
    }
}

window.addEventListener('click', outsideClick);

// Wordle game
const handleSubmitGuess = (event) => {
    event.preventDefault();
    const inputValue = document.querySelector('#guess-input').value.toUpperCase();
    console.log(inputValue);
    const container = document.querySelector('.wordle-container');
    const form = document.querySelector('#guess-form');
    createGuessResults(container,form, inputValue);
    event.target.reset();    

}

const formElement = document.querySelector('#guess-form');
formElement.addEventListener('submit', handleSubmitGuess);
