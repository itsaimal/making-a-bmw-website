
import "./HeaderVert.css"
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import React from 'react';

function HeaderVert() {

   
    return (
        <div className= "headervert">
            < DirectionsCarIcon className="head__one" style={{fill: "white" , fontSize:"50"}}/>
           <SearchIcon className="head__two" style={{fill: "white" , fontSize:"50"}}/>
           <LocationOnIcon className="head__three" style={{fill: "white", fontSize:"50"}}/>

            
        </div>
    )
}

export default HeaderVert
