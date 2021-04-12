import './App.css';
import { SocialIcon } from 'react-social-icons';
import Home from './components/Home'
import React from 'react'
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Sidebar from './components/Sidebar'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'

function App(){
 console.clear();
  return (
    
            <div className="App"> 
            <Sidebar/>  
            <BrowserRouter>
        <Switch>
        
        <Route path="/about" component={ About }/>
        <Route path="/home" component={ Home }/>
        <Route path="/projects" component={ Projects }/>
        <Route path="/contacts" component={ Contact }/>
        <Route path="/" component={ Home }/>
        </Switch>
      </BrowserRouter>
            <div className="Socials">
               <ul>
                <li><SocialIcon url="https://www.facebook.com/weirdish/" bgColor="#ffffff" style={{ height: 35, width: 35 }}/></li> 
                <li><SocialIcon url="https://twitter.com/MehmetSefaGzen" bgColor="#ffffff"  style={{ height: 35, width: 35 }}/></li> 
                <li><SocialIcon url="https://www.linkedin.com/in/mehmet-sefa-gözen-4519b21bb/" bgColor="#ffffff" style={{ height: 35, width: 35 }}/></li>
                <li><SocialIcon url="https://github.com/Sefagozen" bgColor="#ffffff" style={{ height: 35, width: 35 }}/></li>   
                </ul>
            </div>
            </div>
            
  );
}

export default App;
