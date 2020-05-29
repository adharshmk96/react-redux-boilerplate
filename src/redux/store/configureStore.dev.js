// A Central Store for the entire Application.
// const store = createStoreWithMiddleware(
//     Reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

import { createStore, applyMiddleware, compose } from'redux';

// Middlewares
import ReduxThunk from'redux-thunk';
import promiseMiddleware from"redux-promise";
import { createLogger } from'redux-logger';

// import api from'../middleware/api';
// Reducer
import rootReducer from'../reducers';

// Dev Tools
import DevTools from'../../containers/DevTools';


const configureStore = (preloadedState) => {
    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(ReduxThunk, promiseMiddleware, createLogger()),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
            // DevTools.instrument(),
        )
    )

    return store
}

export default configureStore