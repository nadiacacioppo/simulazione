import React from 'react';
import { Grid, GridItem } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import { MovieType } from '../type/MovieType';

interface LoaderMovieProps {
    movies: MovieType[];
}

const LoaderMovie: React.FC<LoaderMovieProps> = ({ movies }) => {
    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={5}>
            {movies.map((movie, index) => (
                <GridItem key={index}>
                    <MovieCard movie={movie} />
                </GridItem>
            ))}
        </Grid>
    );
};

export default LoaderMovie;
