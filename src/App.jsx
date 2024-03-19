import { useEffect, useState} from "react";
import './App.css'
import MovieCard from "./MovieCard";


function App() {

    
  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=4e9c48eed85f0d8e37138dc97b7ccf7c";
    const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=4e9c48eed85f0d8e37138dc97b7ccf7c&query=';

  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState('');


  useEffect(() =>{
    fetch(API_URL)
    .then(res => res.json())
    .then(res => {
      console.log(res.results)
      setMovies(res.results)
    })
  }, [])

  console.log(movies)

  const handleSearch = (e) =>{
    e.preventDefault()
    
    fetch(API_SEARCH + term)
    .then(res=> res.json())
    .then(data => setMovies(data.results))
  }


  return (
    <div className="App">
      <div className="search_nav">
        <div>
          <h1>Movies</h1>
        </div>
        <div>
          <form onSubmit={handleSearch}>
            <div className="input_text">
            <input type="text"  onChange={(e) => setTerm(e.target.value)}/>
            <button>Search</button>
            </div>
            
          </form>
        </div>
      </div>

      <div className="movies">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />)
        )}
      </div>
    </div>
  )
}


export default App
