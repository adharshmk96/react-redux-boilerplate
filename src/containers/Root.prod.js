import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

// Import Components
import Home from '../components/Home';

// HOC
import auth from './auth';

const Root = ({ store }) => (
    <Provider store={store}>
        <Switch>
            <Route path="/" exact component={auth(Home)} />
        </Switch>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired,
}

export default Root
