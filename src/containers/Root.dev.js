
import React from 'react';
import PropTypes from 'prop-types';
import DevTools  from './DevTools';
import { Switch, Route } from 'react-router-dom';

// Import Components
import Home from '../components/Home';
import Register from '../components/register/register';



// HOC that checks auth for routes
import auth from './auth';

const { Provider } = require('react-redux');

const Root = ({ store }) => (
    <Provider store={store}>
        <Switch>
            <Route path="/" exact component={auth(Home,true)} />
            <Route path="/register" exact component={auth(Register,true)} />
            <DevTools />
        </Switch>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired,
}

export default Root