import React from 'react'
import Perfil from '../imagenes/Perfil.png'
import Modall from './Modal'
import Modallargo from './Modallargo'

export default function CuerpoTareas() {
    return (
    <div>
        <div className="cuerpotareas">
            <div className='perfil'>
                <div>
                    <img src={Perfil} className="imgperfil"/>
                </div>
            </div>
            <div className="bienvenido">
                <p>¡Bienvenido!</p>
            </div>
        </div>

        <div className="buttonscontainer">
            <div>
                <div>
                    <Modall />
                </div>
                <div>
                    <Modallargo />
                </div>
            </div>
        </div>
    </div>
    )
}
