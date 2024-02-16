import { TextField } from '@mui/material';
import { useState } from 'react'

function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSignupUser() {
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      })
      const data = await response.json()
      console.log("response from server!", data)
    } catch (err) {
      alert(err)
    }
  }

  return (
    <>
      <h1>Sign Up</h1>

      <div>
      <TextField
       id="filled-basic"
        type="text"
  label="Name"
      value={name}
      variant="filled"
      onChange={(e) => setName(e.target.value)}
      />
      </div>
      <div>
      <TextField type="text"
 label="Email"
      value={email}
      variant="filled"
      onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div>
      <TextField type="password"
  label="Password"
      value={password}
      variant="filled"
      onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button onClick={handleSignupUser}>
        Sign up
      </button>
    </>
  )
}

export default Signup
