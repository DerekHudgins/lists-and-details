import React, { Component } from 'react';
import VillagerDetail from '../components/displays/VillagerDetail';
import { fetchVillagerById } from '../services/fetchVillagers';
import style from './DetailPage.css';

export default class DetailPage extends Component {
  state = {
    loading: true,
    villager: {},
  };

  componentDidMount = async () => {
    const villager = await fetchVillagerById(this.props.match.params.villager);
    this.setState({ loading: false, villager });
  };

  render() {
    const { name, japaneseName, image, phrase } = this.state.villager;

    return (
      <div className={style.detailPage}>
        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <VillagerDetail
            name={name}
            japaneseName={japaneseName}
            image={image}
            phrase={phrase}
          />
        )}
      </div>
    );
  }
}
