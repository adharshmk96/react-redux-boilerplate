// Define User Reducers Here, Handles Actions Related to User

// Import Actions - Action types
const {
    AUTH_USER
} = require('../actions/types');

const userReducer = (state={},action) => {
    switch(action.type){

        case(AUTH_USER):
            return ({
                ...state,
                userData : action.payload
            });
        
        default:
            return state
    }
}

export default userReducer