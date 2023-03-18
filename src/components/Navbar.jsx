import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
         <Box sx={{flexGrow: 1 }}>
         <AppBar position="static"> 
     <Toolbar>
             <Typography variant='h3' color={red} component="div" sx={{flexGrow: 1 }}>
                 <Link to="/home" style={{color:'white'}}>Home</Link>
                </Typography>
            <Button color='inherit' ><Link to="/login" style={{color:'white'}}>Login</Link></Button>
         <Button color='inherit' ><Link to="/signup" style={{color:'white'}}>sign up</Link></Button>
        </Toolbar>
          </AppBar>
       </Box>
    </div>
  )
}

export default Navbar
