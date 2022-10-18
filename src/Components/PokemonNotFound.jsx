import React from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../Images/POKEBALL.png'
import './Styles/PokemonNotFound.css'
const PokemonNotFound = () => {
    return (
        <div className='pokemonNotFound'>
            <img className='card_pokeball' src={Pokeball} alt="Pokeball Image" />
            <h1 className='card_pokenotfound' >Pokemon not found</h1>
            <Link to='/pokedex' className='card_linkpoke'>Back to Pokedex</Link>
        </div>
    )
}

export default PokemonNotFound