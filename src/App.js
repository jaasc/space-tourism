import React, { useState } from "react"
import Home from "./components/Home"
import Crew from "./components/Crew"
import Destination from "./components/Destination"
import Technology from "./components/Technology"
import logo from "./assets/shared/logo.svg"
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom"

function App() {
  const [open, setOpen] = useState(false)

  function toggleNav(){
    setOpen(!open)
  }

  return (
    <Router>
      <div className="navBar">
        <img className="logo" src={logo} alt="logo"/>
        <hr className="nav-break"></hr>
        <div className={`toggle-nav${open? "-active" : ""}`} onClick={toggleNav}></div>
        <div className={`navBar-menu nav-open${open? "-active" : ""}`}>
          <NavLink className={({isActive}) => (isActive? "navBar-link-active" : "navBar-link")} 
            to="/"><strong>00</strong>HOME</NavLink>
          <NavLink className={({isActive}) => (isActive? "navBar-link-active" : "navBar-link")} 
            to="/destination"><strong>01</strong> DESTINATION</NavLink>
          <NavLink className={({isActive}) => (isActive? "navBar-link-active" : "navBar-link")} 
            to="/crew"><strong>02</strong> CREW</NavLink>
          <NavLink className={({isActive}) => (isActive? "navBar-link-active" : "navBar-link")} 
            to="/technology"><strong>03</strong> TECHNOLOGY</NavLink>
        </div>
      </div>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/destination" element={<Destination/>}/>
          <Route path="/crew" element={<Crew/>}/>
          <Route path="/technology" element={<Technology/>}/>
      </Routes>
    </Router> 
  )
}

export default App