import './style.css';
import { Navbar } from './components/shared/Navbar/Navbar';
import { ModalRules }  from './components/shared/ModalRules/ModalRulels';
import { router, addListeners} from './router/router';
import { goBackToDashboard } from './utils';
import { memoryGameLogic } from './utilsMemoryGame';
import { trivialGameLogic } from './utilsTrivialGame';

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

const handleOpenModal = () => {

    mainElement.innerHTML += ModalRules();
    const modal = document.querySelector('#modal');
    modal.style.display = 'flex';
    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        mainElement.removeChild(modal);
        if(window.location.pathname === '/memory-game') {
            const cardMemoryGame = document.querySelectorAll('.card-container');
            cardMemoryGame.forEach(card => {
                card.addEventListener('click', () => {
                    memoryGameLogic();
                })
            }) 
        }
    })

}

if(rulesButton) {
    rulesButton.addEventListener('click', handleOpenModal)
}

// Games
document.addEventListener('DOMContentLoaded' , () => {
    const gameToLoad = window.location.pathname.slice(1);

    switch (gameToLoad) {
        case 'memory-game':
            memoryGameLogic();
            break;
        case 'trivial':
            trivialGameLogic();
        default:
            break;
    }
});



