import { useEffect, useState } from "react"
import { ListMovies } from "../../api/Api"
import { Header } from "../../Components/Header/Header"
import { MovieCard } from "../../Components/MovieCard/MovieCard";

export const Landing = () =>{
    const [moviesList, setMoviesList] = useState([]);
    // console.log("moviesList")
    const getMovie = async()=>{
        let response = await ListMovies()
        console.log(response.data.data.movies)
        setMoviesList(response.data.data.movies)
        
    }
    
    useEffect(()=>{
        getMovie()
    },[])


    return <div>
        <Header/>

        <div className="movie_container">
            {moviesList ? moviesList.map((val,key)=>
                // <MovieCard>
               
                // </MovieCard>
                <MovieCard 
                 title = {val.title}
                image = {val.medium_cover_image}
                rating = {val.rating}
                id = {val.id}/>
               
                ):''}
        </div>
    </div>
}