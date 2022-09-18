import './hero.css';
import SearchBar from "./SearchBar.js";

const Hero = () =>{
    return(
        <section className="header">
            <h2>Search for a Queen</h2>
            <SearchBar />
        </section>
    )
}

export default Hero;