import React from 'react';
import { Link } from "react-router-dom"
import { ReactComponent as LogoHeader } from '../imagenes/Logonavbar.svg';
const logo = () => (
    <div>
        <LogoHeader />
    </div>
);

function Navbar() {
    return (
<div className="barnav-container">
                    <nav className="navcontainer">
                        <div className="logoheader">
                                <LogoHeader />
                        </div>
                        <div className="links">
                            <div>
                                <Link to="/home" className="linknav">Inicio </Link>
                            </div>
                            <div>
                                <Link to="/tareas" className="linknav">Tareas</Link>
                            </div>
                        </div>
                    </nav>
                </div>
    )
}

export default Navbar
