import React from "react";
import Patrick from "../assets/Patrick.jpg"
import '../styles/Contact.css'

const Contact = () => {
    return(
        <div className={"contact"}>
            <div className={"leftSide"}
                 style={{ backgroundImage: `url(${Patrick})` }}
            > </div>
            <div className={"rightSide"}>

                <h1>CONTACT US.</h1>

                <form id={"contact-form"}
                      method={"POST"}
                >
                    <label htmlFor={"name"}>Full Name</label>
                    <input name={"name"}
                           placeholder={"you know what to type here."}
                           type={"text"}
                    />
                    <label htmlFor={"email"}>Email</label>
                    <input name={"email"}
                           placeholder={"you know what to type here too."}
                           type={"email"}
                    />
                    <label htmlFor={"message"}>Old School Message</label>
                    <textarea rows={"6"}
                              placeholder={"Type something nice... Or your life's purpose idc..."}
                              name={"message"}
                              required
                    >
                    </textarea>
                    <button type={"submit"}>Off Ye Go</button>
                </form>
            </div>

        </div>
    )
}
export default Contact