import React,{ useState} from 'react'
import {Navbar} from './Components/Navbar/Navbar'
import './App.css';
import Slider from './Components/Slider/Carousel'
import {Products} from './Components/Products/Products'


function App() {
  const [products, setProducts] = useState([])
  return (
  <div className="App">
    <div className="Navbar">
    <Navbar setProducts={setProducts} products={products} />
    </div>
    <div className="Slider">
    <Slider/>
    </div>
    <div className="Main">
    <Products setProducts={setProducts} products={products} />
    </div>
    <div className="Footer">
    <h6>Made by Mehmet Sefa Gözen &reg;</h6>
    </div>
    </div>
  );
}


export default App;
