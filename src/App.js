
import './App.css';
import Header from "./Header"
import Cover from "./Cover"
import CoverTab from "./CoverTab"
import Series from "./Series"

import { Switch, Route } from "react-router-dom";
import Port from "./Port";
import Cards from "./Cards"
import Footer from "./Footer"
import HeaderVert from "./HeaderVert"


function App() {
  return (
    <div className="App">
      
    
     <Header/>
     <HeaderVert/>
     
     <Cover/>
     <CoverTab/>
     <Series/>
     <Port/>
     <Cards/>
     <Footer/>
     
    
     
     
    
    
    
   
    </div>
  );
}

export default App;
