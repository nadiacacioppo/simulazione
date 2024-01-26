import { useState, useEffect } from 'react';
import { getMovies } from './api'; // Assicurati che il percorso sia corretto
import LoaderMovie from './LoaderMovie'; // Importa il componente LoaderMovie
import { MovieType } from '../type/MovieType'; // Assicurati che il percorso sia corretto

const MovieList = () => {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const movieData = await getMovies();
                if (movieData && movieData.Search) {
                    setMovies(movieData.Search);
                } else {
                    console.error('Dati film non validi:', movieData);
                }
                setLoading(false);
            } catch (error) {
                console.error('Errore durante il recupero dell\'elenco dei film:', error);
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div>
            <h1>Elenco dei Film</h1>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <LoaderMovie movies={movies} />
            )}
        </div>
    );
};

export default MovieList;
