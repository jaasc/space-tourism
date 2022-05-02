import React, { useState } from "react"
import data from "../data"
import moon from "../assets/destination/image-moon.png"
import mars from "../assets/destination/image-mars.png"
import europa from "../assets/destination/image-europa.png"
import titan from "../assets/destination/image-titan.png"

export default function Destination(){
    const [active, setActive] = useState("Moon")

    const desImg = active === "Moon" ? moon : active === "Mars" ? mars :
        active === "Europa" ? europa : active === "Titan" ? titan : ""

    const desTabBtn = data.destinations.map(a => 
        <button className={`tablinks${active === a.name ? "-active" : ""}`}
            onClick={() => toggleDestination(a.name)}>{a.name}</button>)

    const desTabContent = data.destinations.map(a => {
        return(
            <div className={`tabcontent${active === a.name ? ".active" : ""}`}>
                <h1 className="tab-name">{a.name}</h1>
                <p className="tab-des">{a.description}</p>
                <hr className="des-break"></hr>
                <div className="des-info">
                    <div className="desNo">
                        <h4>AVG. DISTANCE</h4>
                        <h3>{a.distance}</h3>
                    </div>
                    <div className="desNo">
                        <h4>EST. TIME TRAVEL</h4>
                        <h3>{a.travel}</h3>
                    </div>
                </div>
            </div>
            )})

    function toggleDestination(name){
        setActive(name)
    }

    return (
        <div className="desContainer">
            <div className="des-planets">
                <div className="des-title">
                    <h3>01</h3>
                    <h2>PICK YOUR DESTINATION</h2>
                </div>
                <img className="des-img" 
                src={desImg} alt="celestial body"/>
            </div>
            <div className="des-tabs">
                <div className="tab">
                    {desTabBtn}
                </div>
                {desTabContent}
            </div>
        </div>
    ) 
}
