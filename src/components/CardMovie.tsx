import React from 'react';
import { MovieType } from '../type/MovieType';

interface CardMovieProps {
    movie: MovieType;
}

const CardMovie: React.FC<CardMovieProps> = ({ movie }) => {
    // Utilizza le informazioni sul film
    return (
        <div>
            <h3>{movie.Title}</h3>
            <img src={movie.Poster} alt={movie.Title} />
        </div>
    );
};

export default CardMovie;
