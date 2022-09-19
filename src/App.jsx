import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import UsersForm from "./assets/components/UsersForm";
import UsersList from "./assets/components/UsersList";
import "./styles.css"

function App() {

  const [ users, setUsers ] = useState([])
  const [ editUser, setEditUser] = useState(null)

  useEffect(() =>{
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data));
  }, [])

  const getUsers = () =>{
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data));
  }

  
  const selectUser = (user) => {
    setEditUser(user)
  }
  
  const deselectUser = () => setEditUser(null);
  // console.log(editUser);


  return (
    <div className="App">
      <div className="userIntro">
        <UsersForm 
          getUsers={getUsers} 
          editUser={editUser}
          deselectUser={deselectUser}
        />
      </div>
      <div className="userList">
        <UsersList 
          selectUser={selectUser} 
          users={users} 
          getUsers={getUsers}
          />
        </div>
    </div>
  );
}

export default App;
