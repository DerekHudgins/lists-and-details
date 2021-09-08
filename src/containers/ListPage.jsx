import React, { Component } from 'react';
import style from './ListPage.css';
import VillagerList from '../components/displays/VillagerList';

export default class ListPage extends Component {
  render() {
    return (
      <div className={style.listpage}>
        <h3>Villager List</h3>
        <VillagerList />
      </div>
    );
  }
}
