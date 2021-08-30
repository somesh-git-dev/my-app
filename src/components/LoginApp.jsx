import React, {useState} from 'react';

const LoginApp = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confound, setConfound] = useState('');

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleAgeChange(event) {
        setAge(event.target.value)
    }

    function handleEmailChange(event) {
        setEmail(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleConfPasswordChange(event) {
        setConfound(event.target.value)
    }

    function formSubmit(event) {
        if (password !== confound)
            alert('Password Not Match')
        else {
            alert('Success!')
            setName('')
            setAge('')
            setEmail('')
            setPassword('')
            setConfound('')
        }
        event.preventDefault();
    }

    return (
        <div>

            <form onSubmit={event => formSubmit(event)}>
                <h2>Sign-Up App</h2>

                <label>Name:</label><br/>
                <input type="text" value={name} onChange={event => handleNameChange(event)}/><br/>
                <label>Age:</label><br/>
                <input type="number" value={age} onChange={event => handleAgeChange(event)}/><br/>
                <label>Email:</label><br/>
                <input type="email" value={email} onChange={event => handleEmailChange(event)}/><br/>
                <label>Password:</label><br/>
                <input type="password" value={password}
                       onChange={event => handlePasswordChange(event)}/><br/>
                <label>Re-Password:</label><br/>
                <input type="password" value={confound} onChange={event => handleConfPasswordChange(event)}/><br/>
                <input type="submit" value="Submit"/>
            </form>

        </div>
    );
};

export default LoginApp;
