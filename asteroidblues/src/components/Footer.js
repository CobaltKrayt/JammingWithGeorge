import React from "react";
import '../styles/Footer.css'
import {Instagram, LinkedIn, Twitter} from "@mui/icons-material";


const Footer = () => {
    return(
        <div className={"footer"}>
            {" "}
            <div className={"socialMedia"}>
                <LinkedIn /> <Instagram/> <Twitter />
            </div>
            <p> &copy; 2077 jammingwithgeorge.com</p>
        </div>
    )
}

export default Footer;