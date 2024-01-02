import { Dashboard } from '../components/pages/Dashboard/Dashboard';
import { MemoryGame } from '../components/pages/MemoryGame/MemoryGame';
import { RockPaperScissors } from '../components/pages/RockPaperScissors/RockPaperScissors';
import { TicTacToe } from '../components/pages/TicTacToe/TicTacToe';
import { Trivial } from '../components/pages/Trivial/Trivial';
import { WhacAMole } from '../components/pages/WhacAMole/WhacAMole';
import { Wordle } from '../components/pages/Wordle/Wordle';

const ROUTES = [
    
    { 
        path: '/',
        component: Dashboard
    },
    { 
        path: '/memory-game',
        component: MemoryGame
    },
    { 
        path: '/rock-paper-scissors',
        component: RockPaperScissors
    },
    { 
        path: '/sudoku',
        component: RockPaperScissors
    },
    { 
        path: '/tic-tac-toe',
        component: TicTacToe
    },
    { 
        path: '/trivial',
        component: Trivial
    },
    { 
        path: '/whac-a-mole',
        component: WhacAMole
    },
    { 
        path: '/wordle',
        component: Wordle
    },

];

export const router = () => {
    
    // Get the path from the url
    const path = window.location.pathname;
    
    // Find component from the ROUTES obj
    const { component } = ROUTES.find(route => route.path === path);

    // If I have the component display the component in the main element
    if(component) {
        document.querySelector("main").innerHTML = component()
    }
}

export const addListeners = () => {

    // Retrive the link attached to the card to navigate to the different games
    const links = document.querySelectorAll('a.link');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const href = link.getAttribute("href");
            history.pushState(null, null, href);

            router();
        })
    })
}

window.addEventListener("popstate", router);

document.addEventListener('DOMContentLoaded', router);
