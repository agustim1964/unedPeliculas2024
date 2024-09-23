import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import VideocamIcon from '@mui/icons-material/Videocam';
import {Link,useNavigate} from 'react-router-dom';

const Barranavegacion =() => {
  const navigate = useNavigate();
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={()=>{navigate("/")}}
              sx={{ mr: 2 }}
            >
              <VideocamIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Aplicación Películas
            </Typography>
            {// Probamos los dos tipos de link en botones 
            }
            <Link to="/peliculas">
              <Button variant="contained">Cartelera</Button>
            </Link>
            <Button variant="contained" onClick={()=>{navigate("/")}}>Home</Button>
          </Toolbar>
        </AppBar>
      </Box>
      </>
      );
}

export default Barranavegacion;