import React from 'react'
import {ProductList} from './ProductList'
import './Products.css'


export const Products = ({setProducts,products}) => {
    const handleClick=(data)=>{
        let timeholder=Math.round(Math.random()*100);
        data.itemid=timeholder;
        setProducts([...products,data]);
        document.querySelector(`.${data.cName} .close`).click();
      }

    return (
    <div className="container" id="Products" >
        <h2>Ürünler</h2>
        <div className="product_holder" >
            {ProductList.map((data,key)=>{
                return(
                    <div id={`${data.id}`}  className={`urun ${data.cName} col-lg-4 col-md-4 col-sm-6 col-xs-6`} >
                    <div key={`item ${key}`}>
                        <img src={data.image} alt={data.alt} />
                        <div className="row product_alt">
                            <div className="pname col-sm-auto">
                        <span>{data.pName}</span>
                            </div>
                            <div className="pprice col-sm auto" >
                        <span style={{float:"right"}}>{data.pPrice}<i id="try" className="fa fa-try " ></i></span>
                            </div>
                        </div>
                            <div className="middle">
                        <button className="btnProduct" data-toggle="modal" data-target={`#myModal${key}`}>{data.pName}</button>
                        <button className="btnAdd" onClick={()=>handleClick(data)} type="button"><i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i></button>
                        </div>
                        <div className="modal fade" id={`myModal${key}`} aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                        <div className="modal-header">
                                            <h3>{data.pName}</h3>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><i className="fa fa-window-close"></i></button>
                                        </div>
                                        <div className="modal-body">
                                            <img src={data.image} alt={data.alt} />
                                            <p className="description">{data.pDescription}</p>
                                         </div>
                                        <div className="modal-footer">
                                            <b>{data.pPrice}<i id="try" className="fa fa-try" ></i></b>
                                            <button className="btnAdd" onClick={()=>handleClick(data)} type="button">Sepete Ekle</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                        
                )
            })}
        </div>
        <button id="Up"><a href='#Home'><i id="Up" className="fa fa-arrow-up fa-2x" aria-hidden="true"></i></a></button>
        </div>
        
    );
  };
