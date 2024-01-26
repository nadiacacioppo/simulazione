import axios from "axios";

export function Api() {

    // Dichiaro constante con key api
    const key = 'b8794c9e';

    // Elenco dei film
    const getMovies = async () => {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?s=terminator&apikey=${key}`);
            return response.data;
        } catch (error) {
            console.error('Errore durante la richiesta dei film:', error);
            throw error;
        }
    };

    // Restituisce dettagli film selezionato
    const getDetailMovie = async (id : string) => {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${key}`);
            return response.data;
        } catch (error) {
            console.error('Errore durante la richiesta dei dettagli del film:', error);
            throw error;
        }
    };

    return (
        <>



        </>
    )
}

export default Api;