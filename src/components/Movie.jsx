import './Movie.css'

export function Movie(movie) {
    const altImg = `Cartelera de ${movie.title}`
    return (
        <div className="mv">
            <img className="mv-img" src={movie.img} alt={altImg} />
            <p className="mv-rating">{movie.rating}</p>
        </div>
    )
}