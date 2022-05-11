import "./Header.css";

function Header(props) {
    return (
        <header className="Header">
            <h1>Popcorn time!</h1>
            <h2>There's currently {props.numberOfMovies} movies that meet your search criteria</h2>
        </header>
    );
}

export default Header;