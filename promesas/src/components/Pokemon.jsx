import { useEffect, useState } from "react"


const Pokemon = () =>{

    const [pokemons, setPokemons] = useState([])

    useEffect(()=>{

        let controller = new AbortController()
        let options = {
            method: "GET",
            headers: {
                "Content-Type" : "application/json"
            },
            signal: controller.signal
        }

        fetch( "https://pokeapi.co/api/v2/pokemon/ditto", options )
        .then(res => res.json())
        .then(data => setPokemons(data))
        .catch(err => console.log(err))
        .finally(()=> controller.abort())

    }, [])

    return(
        <>
        <ul>
        {
            pokemons.map((pokemon, index)=>
            <li key={pokemon.id}>{pokemon.name}</li>
        )}
        </ul>
        </>
    )
}

export default Pokemon