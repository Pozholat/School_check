import '../estilos/estilos.scss'
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../imagenes/Logo.svg';
const logo = () => (
    <div>
        <Logo />
    </div>
);

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            password_confirmation:"",
            signupErrors: ""
        };
     
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const { email, password, password_confirmation } = this.state;
        axios
        .post("http://localhost:3001/signups",
        {
            user: {
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }
        },
        { withCredentials: true }
        )
        .then(response => {
            if (response.data.status === "created"){
            this.props.handleSuccessfulAuth(response.data);
            }
         })
        .catch(error => {
            console.log("login error", error);
        });
        event.preventDefault();
    }

    render () {
        return (
            <div className="view">
                <div>
                <div className='logo2'>
                    <Logo/>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input className="cuadro1"
                            type="email"
                            name="email"
                            placeholder="Usuario"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                            />
                            <input className="cuadro2"
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                            />
                             <input className="cuadro3"
                            type="password"
                            name="password_confirmation"
                            placeholder="Confirmación de contraseña"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                            />
                            <p className="recuperar">Olvidé mi contraseña</p>
                            <Link to="/home" className="boton">Registrarse</Link>
                    </form>
                </div>
                </div>
            </div>
            );
    }
}