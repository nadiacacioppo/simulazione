import React from 'react';
import { MovieType } from '../type/MovieType';
import { Card, Image, Text } from '@chakra-ui/react';

type Props = {
    movie: MovieType;
};

const MovieCard: React.FC<Props> = ({ movie }) => {
    return (
        <Card>
            <Text>{movie.Title}</Text>
            <Image
                src={movie.Poster}
                alt={movie.Title}
                borderRadius='lg'
            />
        </Card>
    );
};

export default MovieCard;
