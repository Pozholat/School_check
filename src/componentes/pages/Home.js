import React, { Component } from 'react'
import Navbar from './../layout/Navbar'
import Footer from './../layout/Footer'
import CuerpoHome from './../layout/CuerpoHome'

 class Home extends Component {
    render() {
        return (
            <div>

                <div>
                    <Navbar />
                </div>

                <div>
                    <CuerpoHome />
                </div>

                <div>
                    <Footer />
                </div>

            </div>
        )
    }
}


export default Home;

