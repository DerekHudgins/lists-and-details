import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListPage from '../../containers/ListPage';
import DetailPage from '../../containers/DetailPage';
import './App.css';

export default function App() {
  return (
    <Router>
      <h1>Animal Crossing Landing Page!</h1>
      <Switch>
        <Route
          path="/"
          exact
          render={(routerProps) => <ListPage {...routerProps} />}
        />
        <Route
          path="/:villager"
          exact
          render={(routerProps) => <DetailPage {...routerProps} />}
        />
      </Switch>
    </Router>
  );
}
