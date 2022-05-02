import React, { useState, useRef, useEffect } from "react"
import data from "../data"
import commander from "../assets/crew/image-douglas-hurley.png"
import mission from "../assets/crew/image-mark-shuttleworth.png"
import pilot from "../assets/crew/image-victor-glover.png"
import flight from "../assets/crew/image-anousheh-ansari.png"

export default function Crew(){
    const [active, setActive] = useState("Commander")
    const delay = 5000;
    const [index, setIndex] = useState(0);
    const countRef = useRef(null);

    const slideImg = active === "Commander" ? commander : active === "Mission Specialist" ? mission :
        active === "Pilot" ? pilot : active === "Flight Engineer" ? flight : ""

    const slider = data.crew.map((a, ind) => 
        <div className={`dot${active === a.role || index === ind ? "-active" : ""}`}  
        onClick={() => toggleCrew(a.role, ind)} ></div>)
        
    const slideInfo = data.crew.map((a, b) => {
        return(
            <div className={`slide-Cont${active === a.role || index === b? ".active" : ""} fade`}>
                <h3 className="crew-role">{a.role}</h3>
                <h1 className="crew-name">{a.name}</h1>
                <p className="crew-desc">{a.bio}</p>
             </div> 
        )})

    useEffect(() => {
        resetTo()
        setActive(data.crew[index].role)
        countRef.current = setTimeout(() => setIndex((a) =>
            a === data.crew.length-1 ? 0 : a+1),delay)
        return () => resetTo()
    }, [index])    

    function resetTo() {
        countRef.current && clearTimeout(countRef.current)
    }

    function toggleCrew(role, ind){
        setActive(role)
        setIndex(ind)
    }

    return (
        <div className="crewContainer">
            <div className="crew-title">
                <h3>02</h3>
                <h2>MEET YOUR CREW</h2>
            </div>
            <div className="crewDetails">
                <div className="slideThis">{slideInfo}</div>
                <div className="dotSlide">{slider} </div>
            </div>
            <div className="crewImgCont">
                <img className="crew-img" src={slideImg} alt="crew member"/>
                <hr className="crew-break"></hr>
            </div>
        </div>
    ) 
}

