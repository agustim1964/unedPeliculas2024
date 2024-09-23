import React from "react";
import CardInfo from "../cardinfo/cardinfo";
import { useEffect, useState } from "react";
import { getPopularMovies } from "../../API/api";
import './peliculas.css';



const Peliculas =() => {
    let [peliculas, setPeliculas]= useState([]);
    useEffect (()=> {
        getPopularMovies().then(res=> (setPeliculas(peliculas=res)));
    }, []);
    const listPeliculas = peliculas.map((pelicula) => {
        return (
            <div className="mui-col-xs-4 mui-col-md-2">
                <CardInfo key={pelicula.id} pelicula={pelicula}/>
            </div>        )
  
        });
    return (
            <div className="container">
                <div className="row">
                        {listPeliculas}
                </div>
            </div>
    );
}

export default Peliculas;