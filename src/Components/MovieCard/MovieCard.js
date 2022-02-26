import { useNavigate } from 'react-router'
import '../MovieCard/Moviecard.css'
export const MovieCard = (props)=>{
    const navigate = useNavigate()
    const routeHandler = (id)=>{
        navigate('/movie/'+id)
    }
 
    return <div className="movie-items" >
        <div className="movie-item" onClick={()=>routeHandler(props.id)}>
            <div className="movie-title"><p>{props.title}</p></div>
            <div className="movie_image">
                <img src={props.image} alt="" />
            </div>
            <div className="rating-movie">{props.rating}</div>
        </div>
    </div>
}