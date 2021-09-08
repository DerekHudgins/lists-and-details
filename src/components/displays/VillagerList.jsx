import React from 'react';
import PropTypes from 'prop-types';

const VillagerList = () => <ul aria-label="villagers">List will go here...</ul>;

VillagerList.propTypes = {
  villagers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      japaneseName: PropTypes.string,
      image: PropTypes.string,
      phrase: PropTypes.string,
    })
  ),
};

export default VillagerList;
