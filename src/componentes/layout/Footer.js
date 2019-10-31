import React from 'react';
import { Link } from "react-router-dom"
import { ReactComponent as LogoFooter } from '../imagenes/Logofooter.svg';
const logo = () => (
    <div>
        <LogoFooter />
    </div>
);

function Footer() {
    return (
            <div className="footercontainer">
                <footer className="footer">
                            <div className="logofooter">
                                <LogoFooter />
                            </div>
                            <div className="info">
                                <p>Schoolcheck 2019</p>
                            </div>
                            <div>
                                <Link to="/avisodeprivacidad" className="aviso">Aviso de privacidad</Link>
                            </div>
                </footer>
            </div>
    );
}

export default Footer
