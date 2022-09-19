import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({getUsers, editUser, deselectUser}) => {
    

    const { register, handleSubmit, reset } = useForm();
    
    useEffect(() => {
        if(editUser){
            reset(editUser)
        }
        
    }, [editUser] )

    const submit = (data) =>{
        if(editUser){
            // actulizando datos usuario
            axios.put(
                `https://users-crud1.herokuapp.com/users/${editUser.id}/`, data)
                .then(() => getUsers()) ;
        } else{
        // si no existe registro crea uno nuevo
        axios.post('https://users-crud1.herokuapp.com/users/', data)
            .then(() => getUsers())
            .catch(error => console.log(error.response));
        // console.log(data)
        }
        clear();
    }

    const clear = () => {
        reset ({
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            birthday: ""
        })
        deselectUser();
    }


    return (
        <form onSubmit={handleSubmit(submit)}>
            <h1>Users Info</h1>
            <div className="input-container">
                <label htmlFor='first_name'>first name</label>
                <input type="text" id="first_name" {...register("first_name")} />
            </div>
            <div className="input-container">
                <label htmlFor='last_name'>last name</label>
                <input type="text" id="last_name" {...register("last_name")} />                
            </div>
            <div className='input-container'>
                <label htmlFor='email'>email</label>
                <input type="text" id="email" {...register("email")} />
            </div>
            <div className="input-container">
                <label htmlFor='password'>password</label>
                <input type="password" id="password" {...register("password")} />
            </div>
            <div className="input-container">
                <label htmlFor='birthday'>birthday</label>
                <input type="date" id="birthday" {...register("birthday")}/>        
            </div>
            <button>Submit</button>
            <button onClick={clear} type="button">
                Clear
            </button>
        </form>
    );
};

export default UsersForm;