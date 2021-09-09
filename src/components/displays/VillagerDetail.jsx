import React from 'react';
import PropTypes from 'prop-types';


const VillagerDetail = ({ name, japaneseName, image, phrase }) => (
  <div role="villager-detail">
    <h3>{name}</h3>
    <h3>{japaneseName}</h3>
    <img alt={name} src={image} />
    <p>{phrase}</p>
  </div>
);

VillagerDetail.propTypes = {
  name: PropTypes.string.isRequired,
  japaneseName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  phrase: PropTypes.string.isRequired,
};

export default VillagerDetail;
