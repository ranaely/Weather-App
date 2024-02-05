import React from 'react'
import Home from './components/home'
import { Link, Typography } from '@mui/material'


function App() {

  return (

    <div>
  <Home/>
  <br/>
  <br/>
  <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="www.linkedin.com/in/rana-ali-849baa243">
        Create by Rana Ali😁💕
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </div>
  
  )
}

export default App;
