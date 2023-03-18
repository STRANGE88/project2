import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <br>
        </br>
      <TextField id="outlined-basic" label="User ID" variant="outlined" required  />
      <TextField id="filled-basic" label="password" variant="filled" required type={'password'} />
    <br></br> 
<Button color="error">Login</Button>         
    </div>
  )
}

export default Login
