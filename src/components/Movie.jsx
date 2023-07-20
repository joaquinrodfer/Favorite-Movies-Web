import './Movie.css'

export function Movie(movie) {
    const altImg = `Cartelera de ${movie.title}`
    return (
        <div className="mv">
            <h2 className="mv-title">{movie.title}</h2>
            <img className="mv-img" src={movie.img} alt={altImg} />
            <p className="mv-authors">Autor/es: {movie.author}</p>
            <p className="mv-rating">{movie.rating}</p>
        </div>
    )
}