import './ModalRules.css';
import { GAMES } from '../../../data/data';

export const ModalRules = () => {
    
    const currentPath = window.location.pathname.slice(1);
    const { name, rules } = GAMES.find(game => game.path === currentPath);

    return `
        <div id="modal" class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h4>${name}' rules
                        <img src="/icons/close.png" alt="close-icon" class="close"/>
                    </h4>
                </div>
                <div class="modal-body">
                    <ul>
                        ${rules.map(rule => {
                            return `
                                <li>- ${rule}</li>
                            `
                        }).join("")}
                    </ul>
                </div>
            </div>
        </div>
    `
}