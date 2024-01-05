import './MemoryGame.css';
import { CARDS_DATA } from './dataMemoryGame';

export const MemoryGame = () => {

    const container = document.createElement('div');
    container.classList.add('memory-game-container');
    
    const gameMemoryNavBar = document.createElement('div');
    gameMemoryNavBar.classList.add('memory-game-navbar');

    const timer = document.createElement('div');
    timer.classList.add('timer');
    timer.innerHTML = '00:00';

    gameMemoryNavBar.appendChild(timer);

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('memory-game-card-container');
    
    container.appendChild(gameMemoryNavBar);
    container.appendChild(cardContainer);

    const shuffleCards = shuffleCardsToDisplay();

    createCards(cardContainer, shuffleCards);

    return container.outerHTML;
}


const createCards = (container, shuffleCards) => {

    for(let i = 0; i < shuffleCards.length; i++) {
  
        const divContainer = document.createElement('div');
        divContainer.classList.add('card-container');
        divContainer.setAttribute('data-image', String(shuffleCards[i].id));
        
        const innerCard = document.createElement('div');
        innerCard.classList.add('inner-card');

        const frontCard = document.createElement('div');
        frontCard.classList.add('front-card');

        const frontCardImg = document.createElement('img');
        frontCardImg.src = 'https://res.cloudinary.com/dmrv2bogq/image/upload/v1704298390/games-hub/animal-card_gtrfss.png';
        frontCardImg.alt = 'animals-icon';

        const backCard = document.createElement('div');
        backCard.classList.add('back-card');

        const backCardImg = document.createElement('img');
        backCardImg.src = shuffleCards[i].imgUrl; 
        backCardImg.alt = shuffleCards[i].name;
        
        
        frontCard.appendChild(frontCardImg);
        backCard.appendChild(backCardImg);
        
        innerCard.appendChild(frontCard);
        innerCard.appendChild(backCard);
        
        divContainer.appendChild(innerCard);
        
        container.appendChild(divContainer);
    }
}

const shuffleCardsToDisplay = () => {
    const duplicateCards = [...CARDS_DATA, ...CARDS_DATA];
    return  duplicateCards.sort(() => Math.random() - 0.5);
}