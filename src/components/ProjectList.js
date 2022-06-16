import React from 'react';
import PropTypes from 'prop-types';

function ProjectList(props) {
  const { selectedProjects } = props;

  return (
    <div className="projectList">
      {selectedProjects.map((project) => {
        return (
          <div className="project" key={Math.random()}>
            <img
              src={project.img}
              alt={'Project preview'}
              category={project.category}
            />
          </div>
        );
      })}
    </div>
  );
}

ProjectList.propTypes = {
  selectedProjects: PropTypes.array,
};

export default ProjectList;
