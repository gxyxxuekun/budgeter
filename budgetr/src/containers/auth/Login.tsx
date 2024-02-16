import { TextField } from '@mui/material';
import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);


    setLoggedIn(true);
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>

          <TextField
          id="filled-basic"
           label="Email"
            type="text"
            value={username}
            variant="filled"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>

          <TextField
          id="filled-basic"
           label="Password"
            type="password"
            value={password}
            variant="filled"
            onChange={(e) => setPassword(e.target.value)}
            
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
