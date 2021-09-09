import React from 'react';
import PropTypes from 'prop-types';
import Villager from './Villager';
import { Link } from 'react-router-dom';

const VillagerList = ({ villagers }) => (
  <ul aria-label="villagers">
    {villagers.map((villager) => (
      <Link key={villager.id} to={`/${villager.name.id}`}>
        <li>
          <Villager
            name={villager.name}
            japaneseName={villager.japaneseName}
            image={villager.image}
            phrase={villager.phrase}
          />
        </li>
      </Link>
    ))}
  </ul>
);

VillagerList.propTypes = {
  villagers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      japaneseName: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      phrase: PropTypes.string.isRequired,
    })
  ),
};

export default VillagerList;
