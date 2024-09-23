import React from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';

const CardInfo = (props)=>{
    const image = "https://image.tmdb.org/t/p/w220_and_h330_face/" + props.pelicula.poster_path;
    return( 
            <Card>
            <CardMedia
                component="img"
                image={image}
                title={props.pelicula.title}
            />
            <CardContent>
            </CardContent>
            <CardActions>
            <Link to={`/infopelicula/${props.pelicula.id}/${props.pelicula.title}`}>
                <Button size="small">+Info</Button>
            </Link>   
            </CardActions>
            </Card>
    );

}

export default CardInfo;