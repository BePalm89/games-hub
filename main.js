import './style.css';
import { Navbar } from './components/shared/Navbar/Navbar';
import { ModalRules }  from './components/shared/ModalRules/ModalRulels';
import { router, addListeners} from './router/router';
import { goBackToDashboard } from './utils';

const divApp = document.querySelector('#app');

const mainElement = document.createElement('main');

divApp.innerHTML += Navbar();

divApp.appendChild(mainElement);

router();
addListeners();

const goToDashboardButton = document.querySelector('.btn-back');

if (goToDashboardButton) goBackToDashboard(goToDashboardButton);


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