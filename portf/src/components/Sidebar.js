import React, { Component } from 'react'
import './Sidebar.css'

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <h2>Hoş Geldiniz</h2>
                <ul>
                    <li><a href="home"><i className="fas fa-home" style={{width:"25px"}}></i>Ana Sayfa</a></li>
                    <li><a href="about"><i className="fas fa-address-card" style={{width:"25px"}}></i>Hakkımda</a></li>
                    <li><a href="projects"><i className="fas fa-project-diagram" style={{width:"25px"}}></i>Projeler</a></li>
                    <li><a href="contacts"><i className="fas fa-address-book" style={{width:"25px"}}></i>İletişim</a></li>
                </ul>
            </div>
        )
    }
}
