import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
//import { Fragment } from 'react';


function App() {

  const[usersList, setUsersList] = useState([]);
  
  const addUserHandler=(_username, _age)=>{
    setUsersList((prevUsersListState)=>{
      return[...prevUsersListState,{id:Math.random().toString(), userName:_username, age:_age}];
    })
  }

  return (
    //using fragment as a wrapper(instead of <wrapper></wrapper> or <div></div>)
    <>
      <AddUser onAddUser={addUserHandler}/>
      {usersList.length>0 && (<UsersList users={usersList}/>)}
    </>
  );
}

export default App;
