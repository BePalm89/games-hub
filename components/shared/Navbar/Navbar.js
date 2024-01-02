import './Navbar.css';
import { Button } from '../Button/Button';

export const Navbar = () => {

    const currentPath = window.location.pathname;

    const handleButton = (style, label) => {
        return currentPath !== '/' ? Button(style, label) : '';
    }

    const titleToDisplay = currentPath !== '/' ? currentPath.slice(1).replaceAll('-', ' ') : 'be palm';

    return `
        <header>
            ${handleButton('btn-back', 'go to dashboard')}
            <h1>games hub - ${titleToDisplay}</h1>
            ${handleButton('btn-rules', 'view rules')}
        </header>
    `
}