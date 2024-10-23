import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:7010/login', { username, password });

            if (response.status === 200) {
                const token = response.data.token;  // Assuming a JWT token is returned
                localStorage.setItem('token', token);  // Save token in localStorage

                // Redirect to shopping page
               navigate('/Shop');
            } else {
                setError('Invalid login credentials');
            }
        } catch (error) {
            setError('Error during login');
            console.error(error);
        }
    };
    return (
        <div id='signup-login-container'>
                <h2 id='title'>LogIn</h2>
                <p>UserName</p>
                <input  type="text" placeholder='Enter your username ' value={username} onChange={(e) => setUsername(e.target.value)}   />
                <p>Password</p>
                <input  type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}  />
                <input  id='button' type="button" value="LogIn" onClick={handleLogin} />
                {error && <p>{error}</p>}
                <p>You don't have  an account? Sign up <span className='here' onClick={()=>navigate('/SignUp')}>here</span></p>
            
        </div>
    );
}

export default Login;