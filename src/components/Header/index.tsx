import { Link } from "react-router-dom";
import './styles.css';

export default function Header() {
    return (
        <div className="header-container mb30">
            <Link to="/" className="header-link">
                <h1 className="header-title">Github API</h1>
            </Link>
        </div>
    );
}