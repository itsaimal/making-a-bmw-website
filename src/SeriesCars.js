import React from 'react'
import "./SeriesCars.css"
import Button from '@material-ui/core/Button';


function SeriesCars({img, h1, button}) {
    return (
        
        <div className="seriescars">
            <div className="seriescars__card">
                <h1>{h1}</h1>
                <img src={img}/>
                <Button variant="contained" color="primary">{button}</Button>


            </div>
        </div>
      
    )
}

export default SeriesCars
