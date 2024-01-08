import './Trivial.css';
import { TRIVIAL_QUESTIONS } from '../../../data/trivialData';
import { Button } from '../../shared/Button/Button';

export const Trivial = () => {

    const container = document.createElement('div');
    container.classList.add('trivial-game-container');

    createHaderGame(container);

    createCardQuestion(container);

    return container.outerHTML;
}

const createHaderGame = (container) => {
    
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('trivial-game-header');

    const startButton = Button('btn-start', 'Start game');
    headerContainer.innerHTML = startButton;

    const timer = document.createElement('p');
    timer.classList.add('box','timer');
    timer.innerHTML = 'TIMER: 10'
/*     const timerSeconds = document.createElement('span');
    timerSeconds.innerHTML = '10';
    timer.appendChild(timerSeconds); */
    headerContainer.appendChild(timer);

    const score = document.createElement('p');
    score.classList.add('box','score');
    score.innerHTML = 'SCORE: 0';
    headerContainer.appendChild(score);

    const numberOfQuestions = document.createElement('p');
    numberOfQuestions.classList.add('box','number-questions');
    numberOfQuestions.innerText = 'QUESTION: 1 / 12';
    headerContainer.appendChild(numberOfQuestions);

    container.appendChild(headerContainer)
}

const createCardQuestion = (container) => {
    const questionContainer = document.createElement('div');
    questionContainer.classList.add('trivial-game-main');

    for (const question of TRIVIAL_QUESTIONS) { 

        const questionCard = document.createElement('div');
        questionCard.classList.add('question-card');
        questionContainer.appendChild(questionCard);

        const questionCardHeaderContainer = document.createElement('div');
        questionCardHeaderContainer.classList.add('question-card-header');
        questionCard.appendChild(questionCardHeaderContainer);
        
        const questionCardHeader = document.createElement('h4');
        questionCardHeader.innerHTML = question.question;
        questionCardHeaderContainer.appendChild(questionCardHeader);

        const questionAnswersContainer = document.createElement('div');
        questionAnswersContainer.classList.add('question-card-body');
        questionCard.appendChild(questionAnswersContainer);

        const answersList = document.createElement('ul');
        answersList.classList.add('answers-list');
        questionAnswersContainer.appendChild(answersList);

        for (const answer of question.options) {
            const answerItem = document.createElement('li');
            answersList.appendChild(answerItem);
            answerItem.innerHTML = answer;

        } 

    }

    container.appendChild(questionContainer);
}