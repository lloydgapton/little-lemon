import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

const Nav = () => (
    <nav className="navBar centerStage">

        <img className="navLogo" src={Logo} alt="Logo" />
        
        <ul className="navList">
            <li className="navItem">
                <Link to="/home" className="navLink">Home</Link>
            </li>
            <li className="navItem">
                <Link to="/about" className="navLink">About</Link>
            </li>
            <li className="navItem">
                <Link to="/menu" className="navLink">Menu</Link>
            </li>
            <li className="navItem">
                <Link to="/reservations" className="navLink">Reservations</Link>
            </li>
            <li className="navItem">
                <Link to="/order" className="navLink">Order Online</Link>
            </li>
            <li className="navItem">
                <Link to="/login" className="navLink">Login</Link>
            </li>
        </ul>
        
    </nav>
);

export default Nav;