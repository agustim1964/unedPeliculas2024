import React from "react";
import peliculasJSON from './../../assets/movies.json';
import CardInfo from "../cardinfo/cardinfo";
import { useEffect, useState } from "react";
import { getPopularMovies } from "../../API/api";
import './home.css';
import { Container } from "@mui/material";

const Home =() => {
    let [peliculasAPI, setPeliculasAPI]= useState([]);
    useEffect (()=> {
        getPopularMovies().then(res=> (setPeliculasAPI(peliculasAPI=res.slice(0,5))));
    }, []);

    const peliculas= peliculasJSON.slice(0,5);
    const listPeliculas = peliculas.map((pelicula) => {
        return <CardInfo key={pelicula.id} pelicula={pelicula}/>
    });
    const listPeliculasAPI = peliculasAPI.map((pelicula) => {
        return <CardInfo key={pelicula.id} pelicula={pelicula}/>
    });
    return (
        <>
            <div className="container">
                <h2>Top 5 Películas JSON</h2>
                <div className="peliculas">
                    {listPeliculas}
                </div>
                <h2>Top 5 Películas Recientes API</h2>
                <div className="peliculas">
                    {listPeliculasAPI}
                </div>
             </div>
        </>
    );
}

export default Home;