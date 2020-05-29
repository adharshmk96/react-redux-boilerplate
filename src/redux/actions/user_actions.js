// Define User Actions Here, Actions Related To User
// Like Login, Logout, Register etc..

// Import types Constant from types where Types are Defined
import {
  AUTH_USER
} from "./types";

// Axios is for Making API Calls
const axios = require('axios');

const userApi = 'http://localhost:8000/api/user'

export const authenticate = async () => {
  const token = '523f45e9b030ac3a202d0d57240a55f84e36c0abe0c1acf0bc63de42082db08e'
  
  const request = await axios.get(`${userApi}/auth`, { headers: {"Authorization" : `Token ${token}`} } );

  return {
    type: AUTH_USER,
    payload: request.data
  };
};
