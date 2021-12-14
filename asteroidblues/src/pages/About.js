import React from 'react'
import IKnow from "../assets/spongebobBrainBefore.png"
import WhatImDoing from "../assets/spongebobBrainAfter.png"
import '../styles/About.css'
const About = () => {
    return(
        <div
        className={"about"}
        >

            <div
                className={"aboutTop"}
                style={{ backgroundImage: `url(${IKnow})` }}
            > </div>
            <div
                className={"aboutBottom"}
                style={{ backgroundImage: `url(${WhatImDoing})` }}
            >
                <h1>YES.</h1>
                <p> source : https://spongebob.fandom.com/wiki/Brain_Office</p>
            </div>
        </div>
    )
}

export default About