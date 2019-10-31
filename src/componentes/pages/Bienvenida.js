import React from 'react'
import { Link } from "react-router-dom"; 
import {withRouter} from "react-router-dom"
import { ReactComponent as Logo } from '../imagenes/Logo.svg';
const logo = () => (
    <div>
        <Logo />
    </div>
);

function Bienvenida() {
    return (
        <div className="all">
            <div>
                <div className='logo'>
                    <Logo/>
                </div>
                <div>
                    <Link to="/login" className="btn">Entrar</Link>
                    <Link to="/signup" className="btn">Registrarse</Link>
                </div>
            </div>
        </div>
        )
}

export default withRouter (Bienvenida)

