import { router } from "./router/router";

export const goBackToDashboard = (goToDashboardButton) => {
    goToDashboardButton.addEventListener('click', handleGoBackToDashboard)
}

const handleGoBackToDashboard = (event) => {
    event.preventDefault();
    history.pushState(null, null, '/');
    resetHiddenVisibilityButtons(['.btn-back', '.btn-rules'])
    resetTitle();
    router();
}

const resetHiddenVisibilityButtons = (buttonArray) => {
    buttonArray.forEach(btn => {
        const btnElement = document.querySelector(btn);
        btnElement.style.visibility = 'hidden'
    });
}

const resetTitle = () => {
    const h1 = document.querySelector('h1');
    h1.innerText = 'game hub - be palm';
}

window.addEventListener("popstate", handleGoBackToDashboard);
