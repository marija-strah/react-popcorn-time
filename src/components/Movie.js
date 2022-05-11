import "./Movie.css"

function Movie(props) {
    return (
        <div className="Movie">
            <h3>{props.title}</h3>
            <p>
                Year: {props.year} <br />
                Rating: {props.rating} <br />
                
                { props.rating > 8 ? <span>RECOMMENDED</span> : <span>SKIP</span> }

            </p>
        </div>
    );
}


export default Movie;