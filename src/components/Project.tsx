import './Project.css';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Project(props) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
     }

    return (
        <div
            className={`container ${isHovered ? "hovered" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <img className="project-image" src={props.imageUrl} alt={props.title} height="400" />
            <div className="project-info">
                <a
                    href={props.projectUrl}
                    style={{ textDecoration: "none", color: "white" }}>
                    {props.title}
                </a>
                {/* <h6>{ props.projectUrl}</h6> */}
                
            </div>

        </div>
    )
}

function redirectTo() {
    
}

export default Project;