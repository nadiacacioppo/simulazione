import { useState, useEffect } from 'react';
import LoaderMovie from './LoaderMovie';
import { getMovies } from './Api'; // Importa la funzione getMovies dal file api.tsx

function MovieList() {
    const [movies, setMovies] = useState([]); // Stato per memorizzare l'array di film

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const moviesData = await getMovies(); // Ottieni l'elenco dei film dall'API
                setMovies(moviesData.Search); // Assumendo che l'API restituisca un oggetto con una proprietà "Search" che contiene l'array di film
            } catch (error) {
                console.error('Errore durante il recupero dei film:', error);
            }
        };

        fetchMovies();
    }, []); // Chiamato solo una volta all'avvio del componente

    return (
        <LoaderMovie movies={movies} />
    );
}

export default MovieList;
