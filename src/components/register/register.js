import React from 'react'

import {useForm} from 'react-hook-form';

const Index = props => {
    const {register,handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    
    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Email or Username" name="username" ref={register}/>
                <input type="password" placeholder="Password" name="password" ref={register}/>
                <input type="submit" value="Register" />
            </form>
            
        </div>
    )
}

export default Index;