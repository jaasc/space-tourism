import React, { useState, useEffect } from "react"
import data from "../data"
import launch from "../assets/technology/image-launch-vehicle-portrait.jpg"
import space from "../assets/technology/image-space-capsule-portrait.jpg"
import spaceport from "../assets/technology/image-spaceport-portrait.jpg"
import launchLand from "../assets/technology/image-launch-vehicle-landscape.jpg"
import spaceLand from "../assets/technology/image-space-capsule-landscape.jpg"
import spaceportLand from "../assets/technology/image-spaceport-landscape.jpg"

export default function Technology(){
    const [active, setActive] = useState("Launch vehicle")
    const [winWidth, setWinWidth] = React.useState(window.innerWidth)

    const techImg = (winWidth <= 850) ?
        active === "Launch vehicle"? launchLand : active === "Space capsule"? spaceLand :
            active === "Spaceport"? spaceportLand : "" :
        active === "Launch vehicle"? launch : active === "Space capsule"? space :
            active === "Spaceport"? spaceport : ""
    
    useEffect(() => {
        window.addEventListener("resize", function() {
            setWinWidth(window.innerWidth)
        })
    }, [])

    const techBtn = data.technology.map((a, b) => 
        <button className="tech-btn" onClick={() => toggleTech(a.name)}
            style={{color: active === a.name && "#0B0D17",  backgroundColor: active === a.name && "white"}}>
                {b+1}</button>)
    
    const techDetails = data.technology.map(a => {
        return(
            <div className={`tech-cont${active === a.name ? ".active" : ""}`}>
                <h4 className="tech-sub">THE TERMINOLOGY...</h4>
                <h1 className="tech-term">{a.name}</h1>
                <p className="tech-des">{a.description}</p>
            </div>
        )})

    function toggleTech(name){
        setActive(name)
    }

    return (
        <div className="techContainer">
            <div className="tech-title">
                <h3>03</h3>
                <h2>SPACE LAUNCH 101</h2>
            </div>
            <div className="tech-details">
                <div className="tbc">{techBtn}</div>
                {techDetails}
            </div>
            <div className="tech-imgCont">
                <img className="tech-img" src={techImg} alt="technology"/>
            </div>
        </div>
    ) 
}

