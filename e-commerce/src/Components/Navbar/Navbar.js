import React, {useState} from 'react';
import './Navbar.css';
import logo from './logo.png';




export const Navbar = ({products,setProducts}) => {
        const [isOpen, setIsOpen] = useState(false)

        function handleRemove(id){
            const itemfilter=products.filter(item => item.itemid !== id.itemid)
            setProducts(itemfilter);
        }
        let total=0,temp=0;
        function TotalCalculator(index1){
            for (let i = products.length-1; i < products.length; i++) {
                temp+=index1;
                total=temp;
            }
             if(total===0){
                setIsOpen(false);
            }
        }
return (
        <header id='Home' style={{position:'relative'}}> 
        <div  className="Navbar" >
            <img className="Logo" src={logo} alt="Logo"/>
            </div>
                <ul className="nav_links">
                   <li><a href='#Home'>Anasayfa</a></li>
                   <li><a href='#Products'>Ürünler</a></li>
                   <li><a data-toggle="modal" data-target="#exampleModalCenter" href='#Account'>Hesap</a></li>
               </ul>
               <div class="modal fade bd-example-modal-sm" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"aria-hidden="true">
                    <div class="modal-dialog modal-sm">
                        <div class="modal-content">
                        <div className="modal-content">
                                        <div className="modal-header">
                                           <h3> Hesap</h3><button type="button" className="close" data-dismiss="modal" aria-label="Close"><i className="fa fa-window-close"></i></button>
                                        </div>
                                        <div className="modal-body">
                                        <label>
                                            Mevcut bir hesabınız yok ise kayıt olmak için <a href="#register" onClick={"#exampleModalCenter"}>buraya</a> tıklayınız.
                                            <input type="text"></input>
                                            </label><label>
                                            <input type="password"></input>
                                            </label>
                                            <button>Giriş yap</button>
                                        <label>
                                        </label>
                                         </div>
                                    </div>
                        </div>
                        </div>
                        </div>
               <div className="PModal" className={isOpen ? 'show modalpro' : 'modalpro'}>
                   {products.map((item,key) => (
                       <div key={key} className="modalproholder">
                           <div className="modalimg">
                           <button type="button" className="close" onClick={() => handleRemove(item)}><i className="fa fa-window-close"></i></button>
                            <p><img alt={item.alt} src={item.image}></img>{item.pName}</p>
                            <b>{item.pPrice}<i  id="try" className="fa fa-try" ></i></b>
                          {TotalCalculator(item.pPrice)}
                          </div>
                        </div>
                        ))}
                        <div className="TotalHolder">
                        <h4 className="TotalP">Toplam:<span> {total} <i id="try" className="fa fa-try" ></i></span></h4>
                        </div>
                        
               </div>
            {products.length >= 0 ? (<a className="cta"  onClick={() => setIsOpen(!isOpen)}><button className="btnNav">{products.length} Eşya</button></a>) : (<a className="cta"></a>)}
     </header>
   
        
           
    )
       
}
