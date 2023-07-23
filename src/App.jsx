import { useState, useEffect } from 'react'
import { Route, Routes, Link } from "react-router-dom";

import Movies from './components/Movies'
import { MovieDetail } from './components/MovieDetail'
import 'react-dropdown/style.css';
import './App.css'

export function App() {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    await fetch('https://favorite-movies-api.onrender.com/api/movies')
    .then((response) => response.json())
    .then(data => setMovies(data))
  }

  useEffect(() => {
    getMovies()
  }, [])


  return (
    <main>
      <Link className='title' to={'/'}>
        <h1>Favorite Movies</h1>
      </Link>
      <Routes>
        <Route path="/" element={<Movies movies={movies} />} />
        <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
      </Routes>
    </main>
  )
}