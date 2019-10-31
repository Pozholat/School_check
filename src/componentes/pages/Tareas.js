import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import Footer from './../layout/Footer'
import CuerpoTareas from './../layout/CuerpoTareas'

export default class Tareas extends Component {
    render() {
        return (
           <div>

                <div>
                    <Navbar />
                </div>

                <div>
                    <CuerpoTareas />
                </div>

                <div>
                    <Footer />
                </div>

            </div>
        )
    }
}
