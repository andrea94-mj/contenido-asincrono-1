import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const PokeApi = () =>{

    const [pokemons, setPokemons] = useState({
        count: 0,
        next: "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
        previous: null,
        results: []
    });

    const [filtro, setFiltro] = useState("");
    let disable = false;

    useEffect(() => {
        fetchPokemon();
    }, []);

    useEffect(() => {
        if (filtro) fetchFilter();
    }, [filtro]);

    const fetchPokemon = async (url = "https://pokeapi.co/api/v2/pokemon") => {
        try {
            const response = await fetch(url);
            const objeto = await response.json();
            setPokemons({
                count: objeto.count,
                next: objeto.next,
                previous: objeto.previous,
                results: objeto.results
            });
            console.log(objeto);
        } catch (error) {
            console.error(error);
        }
    }

    const handlePrevPage = () => {
        if (pokemons.previous) {
            fetchPokemon(pokemons.previous);
        } else {
            disable = true;
        }
    }

    const handleNextPage = () => {
        if (pokemons.next) {
            fetchPokemon(pokemons.next);
        } else {
            disable = true;
        }
    }

    return(
        <>
                <div>
            <h1>PokeApi</h1>
            <p>Aquí encontrarás toda la información sobre tus pokémon favoritos</p>
            <p>Cantidad de pokémon: {pokemons.count}</p>
            <div className="botones-div">
                <button className="link-btn" onClick={handlePrevPage} disabled={disable}>Prev</button>
                <button className="link-btn" onClick={handleNextPage} disabled={disable}>Next</button>
            </div>
            <ul>
                {pokemons.results.map((poke, index) => (
                    <li key={index}>
                        <Link key={index} to={`/pokeApi/${index}`}>
                            {poke.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default PokeApi