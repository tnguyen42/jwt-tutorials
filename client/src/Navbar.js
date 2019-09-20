import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar-wrapper">
            <div className="nav-link">
                <Link to="/signup">Sign Up</Link>
            </div>
            <div className="nav-link">
                <Link to="/login">Log In</Link>
            </div>
            <div className="nav-link">
                <Link to="/todos">Todos</Link>
            </div>
            <div className="nav-link">
                <button>Logout</button>
            </div>
        </nav>
    )
}

export default Navbar;