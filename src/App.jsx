import { useState, useEffect } from 'react'
import { Movie } from './components/Movie'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import './App.css'
import loading from './assets/loading.gif'

export function App() {
  const [movies, setMovies] = useState([])
  const [ratingFilter, setFilter] = useState('')

  const getMovies = async () => {
    const response = await fetch('https://favorite-movies-api.onrender.com/api/movies')
    .then((response) => response.json())
    .then(data => setMovies(data))
  }

  useEffect(() => {
    console.log('useEffectMovies')
    getMovies()
  }, [])

  const options = [
    'Clear','⭐️', '⭐️⭐️', '⭐️⭐️⭐️', '⭐️⭐️⭐️⭐️', '⭐️⭐️⭐️⭐️⭐️'
  ];

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
            <div className='mv-list-filters'>
              <Dropdown options={options} menuClassName="mv-list-filters-menu" onChange={(e) => setFilter(e.value)} placeholder="Rating filter" />
            </div>
          </header>
          <section className='mvs'>
            {movies.filter(movie => {
              if(ratingFilter === 'Clear' || ratingFilter === ''){
                return movie
              } else if(movie.rating === ratingFilter){
                return movie
              }
            }).map((movie) => (
              <Movie key={movie.id} {...movie} />
            ))}
          </section>      
        </article>
      )
    }
  }