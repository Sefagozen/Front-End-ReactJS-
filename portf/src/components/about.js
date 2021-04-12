import React, { Component } from 'react'
import './about.css'
import photo1 from './photos/photo1.jpeg'

export default class about extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="title">
                    <h1>Hakkımda</h1>
                        <div className="img_holder">
                                <img src={photo1} alt="AboutMe"></img>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about_me">
                    <h1>Selamlar tekrardan, ben <span>Mehmet Sefa Gözen</span></h1>
                    <p>
                        21 yaşındayım, İstanbul Altınbaş Üniversitesi Yazılım Mühendisliği bölümü
                        son sınıf öğrencisiyim. Okulda C++, C, SQL ve Python gibi diller görsem de,
                        ilgimin Web dillerine olduğunu fark ettim ve bu diller kendimi bu diller üzerinde
                        geliştirmeyi hedefledim. ReactJs, VanillaJs, HTML ve CSS dilleri üzerinde gelişmeye
                        devam etmekteyim.
                    </p>
                        </div>
                    </div>
                </div>
             </div>
        )
    }
}
