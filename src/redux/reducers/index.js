// use import Reducer from Reducer file(s)
import { combineReducers } from 'redux';

//Import Reducers Here
import user from './userReducer';

const rootReducer = combineReducers({
    // List Reducers Here
    user,
});

export default rootReducer;
