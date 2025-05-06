import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./redux/movieSlice";
import Navbar from './components/Navbar'
import MovieCard from "./components/MovieCard";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { list: movies, loading, error } = useSelector((state) => state.movies);
  

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <h1>Movie List</h1>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
