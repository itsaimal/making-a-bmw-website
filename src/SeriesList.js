import React from 'react'
import "./SeriesList.css"
import {NavLink} from "react-router-dom"

function SeriesList() {
    return (
        <div className="serieslist">
           <NavLink activeClassName="serieslist-active" className="serieslist__inactive" to="/"><h2>ALL</h2></NavLink>
            
            <NavLink activeClassName="serieslist-active" className="serieslist__inactive" to ="/1"> <h2>1</h2></NavLink>
            <NavLink activeClassName="serieslist-active" className="serieslist__inactive" to ="/2">  <h2>2</h2></NavLink>
            <NavLink  activeClassName="serieslist-active"className="serieslist__inactive" to ="/3"> <h2>3</h2></NavLink>
            <NavLink activeClassName="serieslist-active" className="serieslist__inactive" to ="/4">  <h2>4</h2></NavLink>
            <NavLink activeClassName="serieslist-active" className="serieslist__inactive" to ="/5"> <h2>5</h2></NavLink>
            <NavLink activeClassName="serieslist-active" className="serieslist__inactive" to ="/6"> <h2>6</h2></NavLink>
            <NavLink activeClassName="serieslist-active" className="serieslist__inactive" to ="/7"> <h2>7</h2></NavLink>
            <NavLink activeClassName="serieslist-active" className="serieslist__inactive" to ="/8">  <h2>8</h2></NavLink>
            <NavLink activeClassName="serieslist-active" className="serieslist__inactive" to ="/Z"> <h2>Z</h2></NavLink>
            <NavLink activeClassName="serieslist-active" className="serieslist__inactive" to ="/X"> <h2>X</h2></NavLink>
            <NavLink activeClassName="serieslist-active" className="serieslist__inactive" to ="/M">  <h2>M</h2></NavLink>
            <NavLink activeClassName="serieslist-active" className="serieslist__inactive" to ="/in">  <h2>in</h2></NavLink>
            <NavLink activeClassName="serieslist-active" className="serieslist__inactive" to ="/recharge"> <h2>Rechargeable cars</h2></NavLink>
            
        </div>
    )
}

export default SeriesList
