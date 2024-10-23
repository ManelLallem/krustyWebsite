import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp(props) {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        const userData = {
            firstName,
            lastName,
            username,
            password
        };

        try {
            
            const response = await axios.post('http://localhost:7010/create', userData);

            if (response.status === 201) {
                navigate('/Login');
            } else {
                console.error("Failed to create account.");
            }
        } catch (error) {
            console.error("Error signing up:", error);
        }
    };

    return (
        <div id='signup-login-container'>
            <h2 id='title'>Create your account</h2>
                <p>First Name</p>
                <input  type="text" placeholder='Enter your First name' value={firstName} onChange={(e) => setFirstName(e.target.value)}  />
                <p>Last Name</p>
                <input  type="text" placeholder='Enter your Last name'  value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                <p>UserName</p>
                <input  type="text" placeholder='Enter your username ' value={username} onChange={(e) => setUsername(e.target.value)} />
                <p>Password</p>
                <input  type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <input  id='button' type="button" value="Sign Up " onClick={handleSignUp}/>
                <p>You already have  an account? Log In <span className='here' onClick={()=>navigate('/Login')}>here</span></p>
            
        </div>
    );
}

export default SignUp;