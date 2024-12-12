import React from 'react';

function Project(props) {
    return (
        <div className="project">
            <img className="project-image" src={props.imageUrl} alt={props.title} height="400" />
            <div className="project-info">
                <h3>{props.title}</h3>
                <h6>{ props.projectUrl}</h6>
            </div>

        </div>
    )
}

export default Project;