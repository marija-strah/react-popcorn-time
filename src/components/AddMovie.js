import { useState } from "react";

function AddMovie(props) {
    
// initial value of fields is empty string
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [rating, setRating] = useState("");

    // const handleSubmit = (e) => {
    //     setMovies((prevMovies) => {
    //         const newMovie = {
    //           title: title,
    //           year: year,
    //           rating: rating
    //         };
    //         return [newMovie, ...prevMovies];
    //       });
    //       setTitle("");
    // }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newMovie = {
            title: title,
            year: year,
            rating: rating
        }

        props.callbackCreateMovie(newMovie);

        // clears form after submitting new movie
        setTitle("");
        setYear("");
        setRating("");
    }

    return (
        <div className="AddMovie">
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}} />
          <input type="number" name="year" value={year} onChange={(e) => {setYear(e.target.value)}} />
          <input type="number" name="rating" value={rating} onChange={(e) => {setRating(e.target.value)}} />
          <button>Create</button>
        </form>
      </div>
    )

}

export default AddMovie;