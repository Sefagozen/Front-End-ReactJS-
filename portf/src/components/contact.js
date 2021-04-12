import React, { Component } from 'react'
import './contact.css'

export default class contact extends Component {
    render() {
        return (
            <div className="container">
                <h2 class="display-3">İletişim</h2>
                <p>Benimle iletişime geçmek için aşağıdaki yöntemleri kullanabilirsiniz.</p>
                <div class="row">
                    <div class="col">
                    <i class="fas fa-phone-alt"> Beni aramak için</i>
                    <h3>0553 881 68 17</h3>
                    </div>
                    <div class="col">
                    <i class="fas fa-envelope"> Bana mail atmak için</i>
                    <h3>Sefagozen508@gmail.com</h3>
                    <h3>Sefagozen@hotmail.com</h3>
                    </div>
                    <div class="col">
                    <i class="fas fa-map-marked-alt"> Bana bir şeyler göndermek için</i>
                    <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1505.3866229092223!2d28.522988181858455!3d41.00833604512427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55d7d044986f1%3A0x3d22fb1b4120771a!2zNDHCsDAwJzMwLjAiTiAyOMKwMzEnMjYuMCJF!5e0!3m2!1str!2str!4v1609006231032!5m2!1str!2str"></iframe>
                    </div>
                    </div>
            </div>
            </div>
        )
    }
}
