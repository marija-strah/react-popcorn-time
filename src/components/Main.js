import Movie from "./Movie";

function Main(props) {

    return (
        <>
            {props.listOfMovies.map((element) => {
                return (
                    <Movie 
                        key={element.id} 
                        title={element.title} 
                        year={element.year} 
                        rating={element.rating} 
                        />
                    )
            })}
        </>
    );
}

export default Main;