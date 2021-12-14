import React,{useState} from "react";
import Logo from "../assets/sigmaLogo.svg";
import { Link } from "react-router-dom"
import '../styles/Navbar.css'
import {Reorder} from "@mui/icons-material"
import Button from "@mui/material/Button"

const Navbar = () => {

    const [openLinks,setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }

    return (
        <div className={"navbar"}>
            <div className={"leftSide"} id={openLinks?"open":"close"}>
                <img src={Logo} alt={"dis the logo"}/>
                <div className={"hiddenLinks"}>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/menu"}>Menu</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/contact"}>Contact</Link>
                    <Button>
                        <Reorder/>
                    </Button>
                </div>
            </div>
            <div className={"rightSide"}>
                <Link to={"/"}>Home</Link>
                <Link to={"/menu"}>Menu</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact</Link>
                <Button onClick={toggleNavbar}>
                    <Reorder/>
                </Button>
            </div>
        </div>)
}

export default Navbar;