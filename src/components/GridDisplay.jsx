import React from 'react';
import PropTypes from 'prop-types';
import PostGrid from './PostGrid.jsx';

const GridDisplay = ({ fetchedData }) => (
    <div>
      <div className=" container grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-xl mx-auto">
        {fetchedData.map((item, i) => <PostGrid data={item} key={`${item.repo_name}_${i}`} />)}
      </div>
    </div>
);

GridDisplay.propTypes = {
  fetchedData: PropTypes.array.isRequired,
  activeLink: PropTypes.string.isRequired,
};

export default GridDisplay;
