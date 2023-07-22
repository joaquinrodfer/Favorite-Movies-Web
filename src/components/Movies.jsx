import { useState } from 'react';
import Dropdown from 'react-dropdown';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Movie } from './Movie'
import loading from '../assets/loading.gif'

import './Movies.css'

const Movies = ({movies}) => {
    const [ratingFilter, setFilter] = useState('')   

    const options = [
    'Clear','⭐️', '⭐️⭐️', '⭐️⭐️⭐️', '⭐️⭐️⭐️⭐️', '⭐️⭐️⭐️⭐️⭐️'
    ];

    if(movies.length === 0){
        return (
            <article className='mv-list'>
                <h2>Loading data from API...</h2>
                <img className="mvs-loading" src={loading} alt="Loading Gif" />
            </article>
    )} else {
        return (
            
            <article className='mv-list'>
                <header>
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
                        <Link to={`/movie/${movie.id}`} key={movie.id}>
                            <Movie key={movie.id} {...movie} />
                        </Link>
                    ))}
                </section>      
            </article>            
        )
    }
}


Movies.propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
      })
    ).isRequired,
};

export default Movies;