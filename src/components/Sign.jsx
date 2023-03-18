import { Button, TextField } from '@mui/material'
import React from 'react'

const Sign = () => {
  return (
    <div>
        <br>
        </br>
      <TextField id="outlined-basic" label="email" variant="outlined" required  />
      <TextField id="filled-basic" label="password" variant="filled" required type={'password'} />
    <br></br> 
<Button color="error">Sign Up</Button>         
    </div>

  )
}

export default Sign
