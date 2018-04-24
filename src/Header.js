import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'


const Hearder = () => {
    return (
        <div className="header">
            <center>
                <ul >
                    <li><NavLink to="/">Home</NavLink></li>
                    <li className="imgGit"><NavLink to="/Github">Github</NavLink></li>
                    <li><NavLink to="/Sobre">Sobre</NavLink></li>
                </ul>
            </center>
        </div>
    )
}

export default Hearder;
