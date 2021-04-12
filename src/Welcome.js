import React from 'react'
import {Link} from "react-router-dom"
import "./App.css";
const Welcome=()=>{
    return (
        <div>
            <h5>&#128516; Survey created successfully &#128516;</h5>
            <Link to="/">
                <button className="btn btn-primary btn-m-2">Go to Home</button>
            </Link>
        </div>
    )
}

export default Welcome;