import './style.css';
import { Navbar } from './components/shared/Navbar/Navbar';
import { ModalRules }  from './components/shared/ModalRules/ModalRulels';
import { router, addListeners} from './router/router';
import { goBackToDashboard } from './utils';
import { memoryGameLogic } from './utilsMemoryGame';

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

// Memory game
document.addEventListener('DOMContentLoaded' , () => {
    memoryGameLogic();
});

// Trivial gaame
const slideQuestionCards = () => {
    
    const questionCards = document.querySelectorAll('.question-card');

    let currentIndex = 0;
    
    if (currentIndex === 0 ){
        questionCards[0].classList.add('active');
    }

    setInterval(() => {
        questionCards[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % questionCards.length;
        questionCards[currentIndex].classList.add('active');
    }, 10000);
}

document.addEventListener('DOMContentLoaded', () => {

    let startGame = false;
    const startButton = document.querySelector('.btn-start');

    const handleStartGame = () => {
        startButton.style.display = 'none';
        const headerGame = document.querySelectorAll('.box');
        headerGame.forEach(element => {
            element.style.display = 'block';
        })
        const mainContainer = document.querySelector('.trivial-game-main');
        mainContainer.style.display = 'block';
        startGame = true;
        const timer = document.querySelector('.trivial-game-container .trivial-game-header .timer');
        console.log(timer);
        if(startGame) slideQuestionCards();
    }

    startButton.addEventListener('click', handleStartGame);

})


