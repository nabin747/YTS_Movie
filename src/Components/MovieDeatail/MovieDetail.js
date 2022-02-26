import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { getMovieDetails } from "../../api/Api";

export const MovieDetail= ()=>{
    const movieId = useParams().id;

    const[movieDetails, setMoviedetails] = useState([]);

    const showMovieDetails= async() =>{
        const res = await getMovieDetails(movieId);
        console.log("movie    Details");
        console.log(res.data)
        setMoviedetails(res.data.data.movie)
    } 
     
    useEffect(async()=>{
      await  showMovieDetails()
    },[])

    return <div>
        <div>{movieDetails.title}</div>
        <div><img src={movieDetails.medium_cover_image} alt="" /></div>
    </div>
}