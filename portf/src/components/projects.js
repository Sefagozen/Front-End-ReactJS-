import React, { Component } from 'react'
import './project.css'
import prev1 from './projectimages/prev1.png'
import prev2 from './projectimages/prev2.jpg'
import prev3 from './projectimages/prev3.png'

export default class projects extends Component {
    render() {
        return (
            <div className="projects">
                <div class="proj">
                     <div className="item1">
                         <img src={prev1} alt="OEM"></img>
                     <h2>1-)OEM Hesaplayıcı</h2>
                     <hr></hr>
                     <li>Kullanılan teknolojiler; <b>VanillaJs, HTML ve CSS</b></li>
                     <p>Kullanıcıdan parça ismi ve parça ücret inputu alınıp daha sonrasında bu inputlar list item aracılığıyla
                         kullanıcıya gösteriliyor. Düzenleme butonu ile de bu parça isimleri tercihe göre silinebiliyor ya da güncelleştirilebiliyor.
                        Gösterilen tutar tercihe göre TL ya da Dolar cinsinden listelenebilmektedir.
                         Listelenen bu OEM ürünleri, son olarak LocalStorage ile kaydedilmektedir ve bu sayede kapatılıp açılsa da
                         içerisindeki verileri silemiyor.
                     </p>
                    </div>
                    <div className="item3">
                    <h2>2-)Aşçılık için örnek website</h2>
                    <hr></hr>
                    <li>Kullanılan teknolojiler; <b>ReactJS, HTML ve CSS</b></li>
                     <p>Pratik amaçlı yaptığım bu projede kullanıcı tarafından yazılan formüller ve fotoğraflar JSON aracılığıyla tutuluyor. Daha sonrasında
                         App fonksiyonu içerisinden map ile bu formüller ve fotoğraflar cağırılıyor. HTML ve CSS ile düzenlenip
                         ana sayfada paylaşılıyor.
                         </p>
                    <img src={prev3} alt="Template"></img>
                    </div>
                    <div className="item2">
                    <img src={prev2} alt="Drone"></img>
                     <h2>3-)Otonom Drone Projesi</h2>
                     <hr></hr>
                     <li>Kullanılan teknolojiler; <b>Python</b></li>
                     <p>2017 Tubitak otonom drone yarışmaları için ekip olarak drone takımı oluşturduk. Temel yazılımı
                         pixhawk kartı ile gelmişti ancak bazı modifikasyonları Python ile yaptık. İşin yazılımdan daha çok
                         donanım kısmında bulunduğum bu proje ile final turuna kadar geldik ancak finalde oluşan talihsizlikler
                         nedeni ile kazanamadık.
                         </p>
                    </div>
            </div>
            </div>
            
         
         )
    }
}
