/* 
 This is the Entry point for the React SPA,
 To Change Please Run npm eject, and change the configuration in webpack.
*/

// Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

// React 
import React from 'react';
import { render } from 'react-dom';

// Route
import { BrowserRouter } from 'react-router-dom';
import Root from './containers/Root';

//Redux Store
import configureStore from './redux/store/configureStore';
const store = configureStore()

render(
    <BrowserRouter>
        <Root store={store} />
    </BrowserRouter>,
    document.getElementById('root')
)
