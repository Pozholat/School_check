import React, { Component } from 'react'
import Modelo from '../imagenes/Modelo.png'
import Tecnologia from '../imagenes/Tecnologia.png'
import Talleres from '../imagenes/Talleres.png'

export default class CuerpoHome extends Component {
    render() {
        return (
            <div className="bodyhome">
                <div className="modeloeducativo">
                    MODELO EDUCATIVO
                </div>
                <div>
                    <img src={Modelo} className="imgmodelo"/>
                </div>
                <div className="modeloeducativo">
                    TECNOLOGÍA
                </div>
                <div>
                    <img src={Tecnologia} className="imgmodelo"/>
                </div>
                <div className="modeloeducativo">
                    TALLERES VESPERTINOS
                </div>
                <div>
                    <img src={Talleres} className="imgmodelo"/>
                </div>
            </div>
        )
    }
}
