import './ProjectList.css';
import React from 'react';
import Project from './Project.tsx';

function ProjectList(props) {
    return(
        <div className="myProject">
            <h2>My projects</h2>
            <div className="project-list">
                {props.projects.map(function (project) {
                    return <Project className="content" key={project.id} title={project.title} imageUrl={project.imageUrl} projectUrl={project.projectUrl} />
                })}
            </div>
        </div>
    )
}

export default ProjectList;