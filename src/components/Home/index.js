import React, { userState } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';

const index = (props) => {
    return (
        <div>
            Hello !!! {props.username}
        </div>
    )
}

export default index