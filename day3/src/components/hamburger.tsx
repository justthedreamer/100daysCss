import { useState } from "react"

export const Hamburger = () =>{


    const [isHamburgerOpen,setHamburgerState] = useState(false) 
    
    const hamburgerClick = () =>{
        setHamburgerState(!isHamburgerOpen)
    }

    return(
        <div className="hamburger" onClick={hamburgerClick}>
            <div className={`slide slide-top ${isHamburgerOpen ? "slide-top-active": "slide-top-inactive"}`}></div>
            <div className={`slide slide-middle ${isHamburgerOpen ? "slide-middle-active": "slide-middle-inactive"}`}></div>
            <div className={`slide slide-bottom ${isHamburgerOpen ? "slide-bottom-active": "slide-bottom-inactive"}`}></div>
        </div>
    )
}