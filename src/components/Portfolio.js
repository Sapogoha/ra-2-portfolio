import React, { useState } from 'react';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';
import projects from '../constants/projects';
import filters from '../constants/filters';

function Portfolio() {
  const [selectedFilter, setFilter] = useState(filters[0]);
  const [selectedProjects, setProjects] = useState(projects);
  const onFilterClick = (filter) => {
    const selected = filter.target.textContent;
    setFilter(selected);
    selected === filters[0]
      ? setProjects(projects)
      : setProjects(
          projects.filter((project) => project.category === selected)
        );
  };

  return (
    <div className="portfolio">
      <Toolbar
        filters={filters}
        selectedFilter={selectedFilter}
        onFilterClick={onFilterClick}
      />
      <ProjectList selectedProjects={selectedProjects} />
    </div>
  );
}

export default Portfolio;
