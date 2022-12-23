import React, { useState } from "react";
import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button'
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../UI/Helpers/Wrapper";



const AddUser = props =>{

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState('');

    const usernameChangeHandler = (event)=>{
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler =(event)=>{
        setEnteredAge(event.target.value);
    }

    const addUserHandler=(event)=>{
        event.preventDefault();

        if(enteredAge.trim().length ===0 || enteredUsername.trim().length ===0)
        {
            setError(
                {
                    title:'Invalid Input',
                    message: 'Please enter non-empty username and/or age'
                }
            )
            return;
        }
        if(+enteredAge<1)
        {
            setError(
                {
                    title:'Invalid Input',
                    message: 'Age must be greater than 1',
                    reaction: 'Got it'
                }
            )
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
        
    }

    const confirmError =()=>{
        setError(null);
    }
    

    // const addFakeUser=()=>{
    //     console.log('fake User Added');
    //     // This is for testing the custom onClick function for Button compoenent
    // }

    return(
        <Wrapper>
            {error && (<ErrorModal message={error.message} title={error.title} reaction={error.reaction ||"Okay"}
             onConfirmError={confirmError}></ErrorModal>)}
            <Card className={styles['input']}>
                <form onSubmit={addUserHandler}> 
                    <label htmlFor="username">Username</label>
                    <input id="username" value={enteredUsername} type='text' onChange={usernameChangeHandler}></input>
                    <label htmlFor="age">Age (Years)</label>
                    <input id='age' value={enteredAge} type='number' onChange={ageChangeHandler}></input>
                    <Button type="submit">Add My User</Button>
                </form>
            </Card>
        </Wrapper>
    )
};

export default AddUser;