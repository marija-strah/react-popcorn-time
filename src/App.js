import { useState } from "react";
import moviesArr from "./data/movies.json";

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Controls from "./components/Controls";
import AddMovie from "./components/AddMovie";

function App() {

  const [movies, setMovies] = useState(moviesArr);


  const filterByMinRating = (minRating) => {

    // option 1: we pass the new value
    // setMovies(newListOfMovies);

    // option 2: we pass a function (functional update)
    setMovies((prevValue) => {
      const newListOfMovies = prevValue.filter((movie) => {
        return movie.rating >= minRating;
      });
      return newListOfMovies;
    });

  }

  const createMovie = (newMovie) => {
    setMovies((prevMovies)=>{
      return [newMovie, ...prevMovies];
    });
    
  }

  return (
    <div className="App">
      <Header numberOfMovies={movies.length} />
      <Controls callbackTopRated={filterByMinRating} />
      <AddMovie callbackCreateMovie={createMovie} />
      <Main listOfMovies={movies} />
      <Footer />
    </div>
  );
}

export default App;
