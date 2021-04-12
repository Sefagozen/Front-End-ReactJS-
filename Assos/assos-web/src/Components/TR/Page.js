import React, { useState } from 'react'
import './Page.css'
import {LoremIpsum} from 'react-lorem-ipsum';
import {tableItems} from './tableItems';
import {tableItemsP} from './tableItemsP';
import icon1 from './imgs/company.svg'
import icon3 from './imgs/hands.svg'
import icon2 from './imgs/index.svg'
import icon4 from './imgs/quality.svg'
import pic from './imgs/pic5.jpeg'
import pic1 from './imgs/quality.jpg'
import pic2 from "./imgs/logo.png"
import logo from './imgs/logo3.png'
import logo1 from './imgs/logo1.svg'


export const MainTR = () =>{
  const [isOpen, setIsOpen] = useState(false)
    const [header,setHeader]=useState(false);

    const changeBackground=()=>{
        if(window.scrollY >= 50){
            setHeader(true)
        }else{
            setHeader(false)
        }
    }
    window.addEventListener("scroll",changeBackground);
    return(
        <section id="Page">
        <section id="Home">
        <div className={header ? 'header active' : 'header'}>
            <div className="LogoHolder col-lg-6 col-md-6">
                <div className="LogoimgHolder1 col-lg-6 col-md-6">
                        <img className="Logo" src={logo} alt="logo"></img>
                </div>
                <div className="LogoimgHolder2 col-lg-6 col-md-6">
                        <img className="Logo1" src={logo1} alt="logo1"></img>
                </div>
                        </div>
                    <div className="navigationMain text-center col-lg-6">
                            <ul>
                                <li><a href="#Home">Anasayfa</a></li>
                                <li><a href="#About">Hakkımızda</a></li>
                                <li className="dpdown "><a href="#Production">Üretim</a>
                                {/* <ul>
                                    <li><a href="#Punta">Punta</a></li>
                                    <li><a href="#Orme">Örme</a></li>
                                    <li><a href="#Yikama">Yıkama</a></li>
                                    </ul> */}
                                    </li>
                                <li><a href="#Products">Ürünler</a></li>
                            </ul>
                </div>
                <div className="hamburgerMenu">
                <button onClick={() => setIsOpen(!isOpen)} className="hambugerBar"><i className="fa fa-bars"></i></button>
                </div>
                <button  className="btnContact" ><a href="#Contact">İletişim</a></button>
        </div>
        
          <div className="col-lg-8 offset-lg-2 text-center">
              <div className="text">
                  <h1>Kalitenin iplikle dokunduğu yer</h1>
                  <h5>Assos Moda Kumaşçılık ve Örme olarak kaliteli iplik ve boya maddeleri kullanıyor, üretimin ilk girdisinden başlayarak nihai ürüne kadar olan her aşamayı titizlikle inceliyoruz.</h5>
              </div>
              </div>
          </section>

              <section id="Boxes">
              <div className="container-fluid col-md-10 text-center">
              <div className="row boxHolder">
                  <div className="colHolder col-lg-3 col-md-6 col-12">
                      <div className="box col-lg-12">
                  <img id="icon" src={icon1} alt="test"></img>
                          <h3>Vizyonumuz</h3>
                          <p> 2015'den beri sektörde bulunup, önemli yere sahip olan firmamız 6000 m2'lik kapalı alanda yıllık
                          3000 ton puntalı örme kapasitesi ve 6000 ton örme kapasitesine sahiptir. </p>
                      </div>
                  </div>
                  <div className="colHolder col-lg-3  col-md-6 col-12">
                  <div className="box col-lg-12">
                  <img id="icon" src={icon2} alt="test"></img>
                          <h3>Misyonumuz</h3>
                          <p>Yenilikçi, geri dönüşüme önem verdiğimiz yıkama, apre firmamız son teknoloji makinalara sahip olup
                              4400 m2'lik kapalı alanda yıllık 6900 ton yıkama, apre kapasitesine sahiptir.
                          </p>
                      </div>
                  </div>
                  <div className="colHolder col-lg-3 col-md-6 col-12">
                  <div className="box col-lg-12">
                  <img id="icon" src={icon3} alt="test"></img>
                          <h3>Müşteri Memnuniyeti</h3>
                          <p>Firmamızda üretim kadar önem verdiğimiz diğer bir alan olan Müşteri ilişkilerimizde
                              son teknoloji makinalar ve donanımlı ekibimiz ile 100% müşteri memnuniyetini hedefliyoruz. </p>
                      </div>
                  </div>
                  <div className="colHolder col-lg-3 col-md-6 col-12">
                  <div className="box col-lg-12">
                  <img id="icon" src={icon4} alt="test"></img>
                          <h3>Kalite</h3>
                          <p>Assos Moda, Kumaşçılık, Yıkama ve Apre olarak tüm ürünlerimizde
                              kaliteli iplik ve kimyasalları kullanıyoruz. Ürünlerimiz ipliğin girişinden, kumaşın çıkışına kadar
                              her aşamada kontrol edilmektedir.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          </section>
          <section id="About">
            <div className="aboutHolder text-center">
            <img id="Tree" src={pic2} alt="icon"></img>
            <h3>Hakkımızda</h3>
            </div>
                <div className="about container-fluid">
                    <div className="rowAbout row col-lg-12">
                    <div className="text col-lg-6">
                        <LoremIpsum p={2}/>
                    </div>
                    <div className="aboutpic col-lg-6">
                    <img src={pic1}></img>
                    </div>
                    </div>
                    <div className="row columnHolder">
                        <div className="column">
                            <h3>  Buraya Fotoğraf Gelecek</h3>
                        </div>
                        
                    </div> 
                </div>
        </section>
        <section id="Production">
            <div className="ProductionHolder container text-center">
                <h3>Üretim</h3>
                <LoremIpsum p={1}></LoremIpsum>
            </div>
            <div className="container-fluid col-md-10 text-center">
            <div className="ProductionRows row ">
                    <div className="ColumnP col-sm border-right ">
                        <h4>Örme</h4>
                        <p><LoremIpsum p={1}></LoremIpsum></p>
                    </div>
                    <div className="ColumnP  col-sm border-right">
                       <h4>Punta</h4>
                    <p><LoremIpsum p={1}></LoremIpsum></p>
                    </div>
                    <div className="ColumnP col-sm">
                        <h4>Yıkama/Apre</h4>
                        <p><LoremIpsum p={1}></LoremIpsum></p>
                    </div>
                </div>
                </div>

</section>
                                    
                <section id="Machines">
                  <div className="TablesContainer container">
                <h3>Makine Parkurumuz</h3>
                <LoremIpsum p={1}></LoremIpsum>
                    <div className="table-responsive">
                <table className="table table-hover ">           
                <caption className="text-center">Toplamda <b>28</b> Adet Örme Makinamız bulunmaktadır.</caption>
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">ADet</th>
                    <th scope="col">PUs</th>
                    <th scope="col">FINE</th>
                    <th scope="col">MODEL YILI</th>
                    <th scope="col">YEDEK KOVAN</th>
                    <th scope="col">MARKA</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {tableItems.map((data,key)=>{
                    return(
                    <tr>
                    <th scope="row">{data.Piece}</th>
                    <td>{data.Pus}</td>
                    <td>{data.Fine}</td>
                    <td>{data.Year}</td>
                    <td>{data.Hive}</td>
                    <td>{data.BrandN}</td>
                    <td>{data.Kind}</td>
                    </tr>
            ) })}
             </tbody>
               </table>
               <div className="table-responsive">
               <table className="table table-hover">
               <caption className="text-center">Toplamda <b>312</b> Adet Punta Kafamız bulunmaktadır.</caption>
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">MAKİNA</th>
                    <th scope="col">MARKASI</th>
                    <th scope="col">MODEL YILI</th>
                    <th scope="col">İĞ SAYISI (KAFA)</th>
                  </tr>
                </thead>
                <tbody>
                  {tableItemsP.map((data,key)=>{
                    return(
                      <tr>
                    <th scope="row">Punta Makinası</th>
                    <td>{data.Brand}</td>
                    <td>{data.Year}</td>
                    <td>{data.Head}</td>
                  </tr>
                    )
                  })}
                </tbody>
              </table>
              </div>
              </div>
              </div>
              </section>
        
        <section id="Products">
            <div className="ProductsHolder text-center">
                <h3>Ürünlerimiz</h3>
                <LoremIpsum p={1}></LoremIpsum>
            </div>
            <div className="container">
                <div class="grid-container">
                    <div class="grid-item"><img src={pic} alt="picHolder"/><div className="test">Test</div> </div>
                    <div class="grid-item"><img src={pic} alt="picHolder"/><div className="test">Test</div> </div>
                    <div class="grid-item"><img src={pic} alt="picHolder"/><div className="test">Test</div> </div>
                    <div class="grid-item"><img src={pic} alt="picHolder"/><div className="test">Test</div> </div>
                    <div class="grid-item"><img src={pic} alt="picHolder"/><div className="test">Test</div> </div>
                    <div class="grid-item"><img src={pic} alt="picHolder"/><div className="test">Test</div> </div>
                    <div class="grid-item"><img src={pic} alt="picHolder"/><div className="test">Test</div> </div>
                    <div class="grid-item"><img src={pic} alt="picHolder"/><div className="test">Test</div> </div>
                    <div class="grid-item"><img src={pic} alt="picHolder"/><div className="test">Test</div> </div>
                    <div class="grid-item"><img src={pic} alt="picHolder"/><div className="test">Test</div> </div>
                    <div class="grid-item"><img src={pic} alt="picHolder"/><div className="test">Test</div> </div>
                    <div class="grid-item"><img src={pic} alt="picHolder"/><div className="test">Test</div> </div>
                </div>
            </div> 
    </section>
      <section id="Contact">
      <div className="ContactContainer container-fluid">
          <div className="ContactHolder text-center">
          <h1>Contact</h1>
          </div>
          
          <div className="contactRows row col-md-12">
          <div className="ColumnC border-right col-md-6 ">
                <h3>Örme / Punta</h3>
                <h4>Adres</h4>
                <h6>Mustafa Kurdoğlu Cd. No:19 Kat:2, 34524 Beylikdüzü Osb/Beylikdüzü/İstanbul</h6>
                <h4>Adres</h4>
                <h6>Mustafa Kurdoğlu Cd. No:19 Kat:2, 34524 Beylikdüzü Osb/Beylikdüzü/İstanbul</h6>
                <h4>Adres</h4>
                <h6>Mustafa Kurdoğlu Cd. No:19 Kat:2, 34524 Beylikdüzü Osb/Beylikdüzü/İstanbul</h6>
                <h4>Adres</h4>
                <h6>Mustafa Kurdoğlu Cd. No:19 Kat:2, 34524 Beylikdüzü Osb/Beylikdüzü/İstanbul</h6>
            </div>
            <div className="ColumnC col-md-6">
                <h2>Yıkama / Apre</h2>
                <h4>Adres</h4>
                <h6>Mustafa Kurdoğlu Cd. No:19 Kat:2, 34524 Beylikdüzü Osb/Beylikdüzü/İstanbul</h6>
                <h4>Adres</h4>
                <h6>Mustafa Kurdoğlu Cd. No:19 Kat:2, 34524 Beylikdüzü Osb/Beylikdüzü/İstanbul</h6>
                <h4>Adres</h4>
                <h6>Mustafa Kurdoğlu Cd. No:19 Kat:2, 34524 Beylikdüzü Osb/Beylikdüzü/İstanbul</h6>
                <h4>Adres</h4>
                <h6>Mustafa Kurdoğlu Cd. No:19 Kat:2, 34524 Beylikdüzü Osb/Beylikdüzü/İstanbul</h6>
            </div>
      </div>
      </div>
  </section>
  </section>
    )
    }
