import axios from "axios";

// Dichiaro constante con key api
const key = 'b8794c9e';

// Elenco dei film
export const getMovies = async () => {
    try {
        const response = await axios.get(`https://www.omdbapi.com/?s=avengers&apikey=${key}`);
        return response.data;
    } catch (error) {
        console.error('Errore durante la richiesta dei film:', error);
        throw error;
    }
};

// Restituisce dettagli film selezionato
export const getDetailMovie = async (id: string) => {
    try {
        const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${key}`);
        return response.data;
    } catch (error) {
        console.error('Errore durante la richiesta dei dettagli del film:', error);
        throw error;
    }
};