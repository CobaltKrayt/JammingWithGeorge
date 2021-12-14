import React from "react";
import {Link} from "react-router-dom"
import {Button} from "@mui/material";
import BannerImage from "../assets/obiboi.jpg"
import '../styles/Home.css'

const Home = () => {
    return (
        <div className="home"
             style={{ backgroundImage: `url(${BannerImage})` }}
        >
            <div
                className="headerContainer"
            >
                <h1> This should be the main page</h1>
                <p> LOREM IPSUM I FORGOT THE REST</p>
                <Link to={"/menu"}>
                    <button>REACT ME DADDY</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;