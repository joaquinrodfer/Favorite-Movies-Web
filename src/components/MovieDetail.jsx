import './Movie.css'
import { useParams } from 'react-router'

export function MovieDetail({movies}) {
    const { id } = useParams()
    const movie = movies.find(movie => movie.id === id)

    const altImg = `Cartelera de ${movie.title}`
    return (
        <div className="mv">
            <h1>Detalles de la película {movie.title}</h1>
            <h2 className="mv-title">{movie.title}</h2>
            <img className="mv-img" src={movie.img} alt={altImg} />
            <p className="mv-authors">Autor/es: {movie.author}</p>
            <p className="mv-rating">{movie.rating}</p>
        </div>
    )
}