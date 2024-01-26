import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Importa useParams per ottenere i parametri dalla URL
import { getDetailMovie } from '../components/api';

export const MovieDetail = () => {
    const { id } = useParams(); // Ottieni l'id del film dalla URL
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovieDetail = async () => {
            if (id === undefined) {
                // Gestisci il caso in cui l'id non è presente nell'URL
                console.error('Id del film non presente nell\'URL');
                return;
            }

            try {
                const movieDetail = await getDetailMovie(id); // Passa l'id del film alla funzione getDetailMovie
                setMovie(movieDetail);
                setLoading(false);
            } catch (error) {
                console.error('Errore durante il recupero dei dettagli del film:', error);
                setLoading(false);
            }
        };

        fetchMovieDetail();
    }, [id]); // Assicurati di aggiungere id come dipendenza affinché il componente si aggiorni quando l'id cambia

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <h1>{movie?.Title}</h1> {/* Utilizzo della null propagation per evitare errori se movie è null */}
                    <p>{movie?.Plot}</p> {/* Utilizzo della null propagation per evitare errori se movie è null */}
                    {/* Altre informazioni sul film */}
                </div>
            )}
        </div>
    );
};
