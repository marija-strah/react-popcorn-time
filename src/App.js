import { useState } from "react";
import moviesArr from "./data/movies.json";

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Controls from "./components/Controls";

function App() {

  const [movies, setMovies] = useState(moviesArr);
  
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(2000);
  const [rating, setRating] = useState(5);


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

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => {
      const newMovie = {
        title: title,
        year: year,
        rating: rating
      };
      return [newMovie, ...prevMovies];
    });
    setTitle("");
  }


  return (
    <div className="App">
      <Header numberOfMovies={movies.length} />
      <Controls callbackTopRated={filterByMinRating} />

      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}} />
          <input type="number" name="year" value={year} onChange={(e) => {setYear(e.target.value)}} />
          <input type="number" name="rating" value={rating} onChange={(e) => {setRating(e.target.value)}} />
          <button>Create</button>
        </form>
      </div>


      <Main listOfMovies={movies} />
      <Footer />
    </div>
  );
}

export default App;
