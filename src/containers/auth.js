// HOC that wraps componenets with AUTH Check (Front end Level Only)
// NOTE : This Component will extend Redux user action auth to send token to server inorder to validate user
// Usage : import Auth from hoc/Auth; Auth(Component)


import React, { useState, useEffect } from 'react';
import { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {connect} from 'react-redux';

import { authenticate } from '../redux/actions/user_actions';
// import CircularProgress from '@material-ui/core/CircularProgress';

// Wrapper Function that Return a modified Class 
// This Function Accepts Component and should it reload parameter and returns a component with modified flow

const auth = (ComponentClass, redirect, adminRoute=null) => {

    const AuthenticationCheck = (props) => {
        const [loading,setLoading] = useState(true);
        const user = useSelector(state => state.user);
        const dispatch = useDispatch();

        useEffect(()=>{
            console.log("time")
            dispatch(authenticate()).then(response => {
                if (!user) {
                    if (redirect) {
                        props.history.push('/register_login')
                    }
                } else {
                    if (adminRoute && !user.isAdmin) {
                        props.history.push('/user/dashboard')
                    } else {
                        if (redirect === false) {
                            props.history.push('/user/dashboard')
                        }
                    }
                }
            })
            setLoading(false)
        },[]);
    
        if (loading)  {
            return (
                <div>
                    loading...
                </div>
            )
        }
        else {
            return (
                <ComponentClass { ...props } user={user} />
            );
        }
    }

    return AuthenticationCheck

};

export default auth
