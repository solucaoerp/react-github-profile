import './styles.css';

import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/ButtonPrimary";

export default function Welcome() {
    return (
        <div className="welcome-container">
            <h1 className="welcome-title">Desafio Github API</h1>
            <h2 className="welcome-subtitle">DevSuperior - Escola de programação</h2>
            <Link to="/profile">
                <ButtonPrimary buttonDescription="Começar" />
            </Link>
        </div>
    );
}