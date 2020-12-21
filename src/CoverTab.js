import React from 'react'
import "./CoverTab.css"
import Button from '@material-ui/core/Button';

function CoverTab() {
    return (
        <div className="coverTab">
            <div className= "coverTab__leftImg">
        <img src="https://i.insider.com/5e6becc5e4f9fe7f9224a765?width=650&format=jpeg&auto=webp"/>

        <h2>THE iX</h2>
        <Button variant="outlined" color="white">Everything about the car</Button>
            </div>

            <div className="coverTab__rightImg">
            <img src="https://www.autocar.co.nz/_News/BMW-iX/ix6.jpg?Action=thumbnail&algorithm=fill_proportional&width=685"/>
            
            <h2>THE WORLD'S MOST
                 SUSTAINABLE CAR 
                 MANUFACTURER</h2>
            <Button variant="outlined" color="white" >Read about the award</Button>
            </div>
            
        </div>
    )
}

export default CoverTab
