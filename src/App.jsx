import { useState, useEffect } from 'react'
import { Movie } from './components/Movie'
import './App.css'
import loading from './assets/loading.gif'

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

  if(movies.length === 0){
    return (
      <article className='mv-list'>
        <header>
          <h1>Movie List</h1>
        </header>
        <section className='mvs'>
          <h2>Loading data from API...</h2>
          <img className="mvs-loading" src={loading} alt="Loading Gif" />
        </section>
      </article>
    )} else {
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
  }