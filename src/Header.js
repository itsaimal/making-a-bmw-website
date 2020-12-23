import React from 'react'
import "./Header.css"
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';


function Header() {
    return (
        <div className="header">
           { /* */}
           { /*Header left */}
            <div className="header__left">
            <h4>Models</h4>
            <h4>Services</h4>
            <h4>Discover</h4>
            <h4>Electrification</h4>
            <h4>Find your BMW</h4>
            </div>

            { /*right */}

            <div className="header__right">
           < DirectionsCarIcon className="one" style={{fill: "white" , fontSize:"50"}}/>
           <SearchIcon className="two" style={{fill: "white" , fontSize:"50"}}/>
           <LocationOnIcon className="three" style={{fill: "white", fontSize:"50"}}/>
           <img src="https://www.bmw.se/etc/clientlibs/digitals2/clientlib/media/img/BMW_White_Logo.svg "/>

            </div>

            
            
        </div>
    )
}

export default Header
