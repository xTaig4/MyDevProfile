import './Project.css';
import React from 'react';
import { useState } from 'react';

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
                <h3>{props.title}</h3>
                {/* <h6>{ props.projectUrl}</h6> */}
            </div>

        </div>
    )
}

export default Project;