import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">HOME</Link>
            <Link to="/commodities">COMMODITIES</Link>
            <Link to="/Company">COMPANY</Link>
            <Link to="/contact">CONTACT</Link>
        </nav>
    );
}

export default Navbar;