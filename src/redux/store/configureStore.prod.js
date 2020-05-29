import { createStore, applyMiddleware, compose }  from 'redux';

// Middleware
import ReduxThunk  from 'redux-thunk';
import promiseMiddleware  from "redux-promise";
// import api from ('../ middleware/api');

// Reducer
import rootReducer from '../reducers';

const configureStore = preloadedState => createStore(
    rootReducer,
    preloadedState,
    compose(
        applyMiddleware(ReduxThunk, promiseMiddleware)
    )
)

export default configureStore