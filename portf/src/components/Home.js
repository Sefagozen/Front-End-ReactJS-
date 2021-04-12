import React, { Component } from 'react'
import './Home.css'
import photo from './photos/photo.jpg'


export default class Home extends Component {
    
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-12">
                        <div className="Home_content">
                            <img className="Photo1" src={photo} alt="Sefa"></img>
                            <h1>Selamlar, ben <span>Mehmet Sefa Gözen</span></h1>
                            <p>Öncelikle portfolyoma hoş geldiniz. Kısaca özetlemek gerekirse; Ben bir Jr. Front-end geliştiricisiyim. VanillaJs, ReactJs, HTML&CSS dilleri üzerinde çalışmaktayım.</p>
                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
