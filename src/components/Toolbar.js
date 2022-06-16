import React from 'react';
import PropTypes from 'prop-types';

function Toolbar(props) {
  const { filters, selectedFilter, onFilterClick } = props;
  return (
    <div className="filtersList">
      {filters.map((filter) => {
        return filter === selectedFilter ? (
          <button
            className="filter selectedFilter"
            key={selectedFilter}
            onClick={onFilterClick}
          >
            {selectedFilter}
          </button>
        ) : (
          <button
            className="filter"
            key={Math.random()}
            onClick={onFilterClick}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}

Toolbar.propTypes = {
  filters: PropTypes.array,
  selectedFilter: PropTypes.string,
  onSelectFilter: PropTypes.func,
};

export default Toolbar;
