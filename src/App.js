
import './App.css';
import Header from "./Header"
import Cover from "./Cover"
import CoverTab from "./CoverTab"
import Series from "./Series"

import { Switch, Route } from "react-router-dom";
import Port from "./Port";
import Cards from "./Cards"


function App() {
  return (
    <div className="App">
      
      
     <Header/>
     <Cover/>
     <CoverTab/>
     <Series/>
     <Port/>
     <Cards/>
    
     
     
    
    
    
   
    </div>
  );
}

export default App;
