import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Bienvenida from "./componentes/pages/Bienvenida";
import Login from "./componentes/pages/Login.js";
import SignUp from "./componentes/pages/Signup";
import Home from "./componentes/pages/Home";
import Tareas from "./componentes/pages/Tareas";
import Aviso from "./componentes/pages/Aviso";


const NotFound = () => <h1>404</h1>;

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Bienvenida} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/home" component={Home} />
                <Route path="/tareas" component={Tareas} />
                <Route path="/avisodeprivacidad" component={Aviso} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

