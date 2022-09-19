import axios from 'axios';
import React from 'react';

const UsersList = ({ users, selectUser, getUsers }) => {

    const deleteUser = (id) => {
        // alert("eliminando a despreciable usuario")
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
        .then(() => getUsers());
    }
    return (
        <div className='userCard'>         
            <ul>
                {
                    users.map(user => (
                        <li key={user.id}>
                            <div><b>First Name: </b>{user.first_name}</div>
                            <div><b>Last Name: </b>{user.last_name}</div>
                            <div><b>Email </b>{user.email}</div>
                            <button onClick={() => selectUser(user)}>
                                Edit User
                            </button>
                            <button onClick={() => deleteUser(user.id)}>
                                Delete
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UsersList;