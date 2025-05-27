import axios from "axios";


const API_KEY = "http://www.omdbapi.com/apikey.aspx?VERIFYKEY=05102584-6531-403a-8af1-d56240b97425";
const BASE_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=7b8059f2";


export const fetchMovies = async (searchTerm, type) => {
    const response = await axios.get(`${BASE_URL}?s=${searchTerm}&type=${type}&apikey=${API_KEY}`);
    return response.data;
};

export const fetchMovieDetails = async (id) => {
    const response = await axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
    return response.data;
};