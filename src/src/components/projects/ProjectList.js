import React from 'react';
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom';


const ProjectList = ({projects}) => {
    return(
        <div className="project-List section">

        { projects && projects.map(project => {
            return(
                <Link to= {'/project/' + project.id} key = {project.id}>
                <ProjectSummary project= {project}  />
                </Link>
            )
        })}
            {/* <ProjectSummary /> */}

            </div>
    )             
}

export default ProjectList;