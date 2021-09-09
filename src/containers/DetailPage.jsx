import React from 'react';
import PropTypes from 'prop-types';
// import style from './VillagerDetail.css';

const VillagerDetail = ({ name, japaneseName, image, phrase }) => (
  <>
    <h3>{name}</h3>
    <h3>{japaneseName}</h3>
    <img className={style.villagerImg} alt={name} src={image} />
    <p>{phrase}</p>
  </>
);

VillagerDetail.propTypes = {
  name: PropTypes.string.isRequired,
  japaneseName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  phrase: PropTypes.string.isRequired,
};

export default VillagerDetail;
