import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieData } from "../../API/api";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import './infopelicula.css';

const InfoPelicula =() => {
    let [infopelicula, setInfoPelicula] = useState({});
    let {id} = useParams();
    useEffect(()=>{
        getMovieData(id).then(res=>(setInfoPelicula(infopelicula=res)));
    },[]);
    const image = "https://image.tmdb.org/t/p/w220_and_h330_face" + infopelicula.poster_path;
    const generos = () => {
            return infopelicula.genres?.map((genero,index) => {
                return <Chip key={index} label={genero.name} color="primary" />;
            });
    }
    return (
        <>
            <div className="infopelicula">
                <div className="info">
                    <Stack spacing={1} sx={{ alignItems: 'center' }}>
                        <Stack  direction={{ xs: 'column', sm: 'row' }}
                                spacing={{ xs: 0, sm: 1, md: 2 }}
                        >
                            <Chip label="generos : " color="outlined" />
                            {generos()}
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <Chip label="puntuación : " color="outlined" />
                            <Chip label={infopelicula.vote_average} color="primary" />
                        </Stack>
                    </Stack>
                    <div className="caratula">
                        <Card  sx={{ maxWidth: 110 }}>

                        <CardMedia
                            component="img"
                            height="165"
                            image={image}
                            alt={infopelicula.title}
                        />
                        </Card>
                    </div>
                    <div className="data">
                        <h1>{infopelicula.title}
                        </h1>
                        <h5>{infopelicula.release_date}</h5>
                        <p>{infopelicula.overview}</p>

                    </div>
                </div>
            </div>
        </>
    );
}

export default InfoPelicula;