import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/ButtonPrimary";

export default function Welcome() {
    return (
        <div className="container">
            <h1>Desafio Github API</h1>
            <h2>DevSuperior - Escola de programação</h2>
            <Link to="/profile">
                <ButtonPrimary buttonDescription="Começar" />
            </Link>
        </div>
    );
}