// api key: 8bf8616c7e30502fecaf4a8bf076d8c7
// ex api request: https://api.themoviedb.org/3/movie/550?api_key=8bf8616c7e30502fecaf4a8bf076d8c7

// search: "https://api.themoviedb.org/3/search/movie?&api_key=8bf8616c7e30502fecaf4a8bf076d8c7&query="

// images: "https://image.tmdb.org/t/p/w1280"

import React, { useEffect, useState } from 'react'
import Movie from './components/Movie'

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?api_key=8bf8616c7e30502fecaf4a8bf076d8c7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=8bf8616c7e30502fecaf4a8bf076d8c7&query="



function App() {
  const [movies, setMovies] = useState([])
  const [searchKey, setSearchKey] = useState()

  useEffect(() => {
    getMovies(FEATURED_API)

  }, [])

  const getMovies = (API) => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMovies(data.results)
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchKey) {
      getMovies(SEARCH_API + searchKey)
      setSearchKey('')
    }
  }
  const handleChange = (event) => {
    setSearchKey(event.target.value)
  }
  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={searchKey} className="search" type="search" placeholder="I will watch..." />
        </form>
      </header>
      <div className="movie-container">

        {
          movies.length > 0 && movies.map(movie => (
            <Movie {...movie} key={movie.id} />
          ))}
      </div>
      <div className="copyright">
        <p>Built by <a href="https://www.linkedin.com/in/yagnurtetikcan/">Yagnur Tetikcan</a>  </p>

      </div>
    </>
  );
}

export default App;
