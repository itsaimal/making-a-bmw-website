import React from 'react'
import "./Series.css";
import SeriesList from "./SeriesList"

function Series() {
    return (
        <div className="series">
            <div className="series__left">
         <h3>Series</h3>
            </div>

            <div className="series__right">
             <h3>Body</h3>

            </div>
            <SeriesList/>
        </div>
    )
}

export default Series
