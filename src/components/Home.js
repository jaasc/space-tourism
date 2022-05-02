import React from "react"
import { useNavigate } from "react-router-dom"

export default function Home(props){
    let navigate = useNavigate()

    return (
        <div className="homeContainer">
            <div className="home-title">
                <h2>SO, YOU WANT TO TRAVEL TO</h2>
                <h1>SPACE</h1>
                <p>Let's face it! if you want to go to space, 
                you might as well genuinely go to outer space and 
                not hover kind of on the edge of it. Well sit back, 
                and relax because we'll give you a truly out of 
                this world experience!</p>
            </div>
            <div className="home-explore">
                <div className="circle" onClick={() => {navigate("/destination")}}>EXPLORE</div>
            </div>
        </div>
    ) 
}

