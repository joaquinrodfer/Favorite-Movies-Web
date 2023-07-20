import { useState, useEffect } from 'react'
import { Movie } from './components/Movie'
import './App.css'

export function App() {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const response = await fetch('https://favorite-movies-api.onrender.com/api/movies')
    .then((response) => response.json())
    .then(data => setMovies(data))
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <article className='mv-list'>
      <header>
        <h1>Movie List</h1>
      </header>
      <section className='mvs'>
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </section>      
    </article>
  )
}