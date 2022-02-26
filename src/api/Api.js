import axios from "axios";

export const ListMovies=()=>{
    return axios.get('https://yts.mx/api/v2/list_movies.json')
}

export const getMovieDetails = (id)=>{
    return axios.get('https://yts.mx/api/v2/movie_details.json?movie_id='+id)
}