import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import history from './history';
import PropTypes from 'prop-types';
import { Demo } from './components';
import { Router } from 'react-router';
import { Main } from './components';

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Main>
          <Route exact path='/' component={Demo} />
        </Main>
      </Router>
    )
  }
}
export default Routes;
