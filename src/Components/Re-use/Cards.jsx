import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/PokemonCard.css'
const Cards = ({ url }) => {

    const [pokemon, setPokemon] = useState()
    const [color, setcolor] = useState()

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    })

    useEffect(() => {
        if (pokemon) {
            axios.get(pokemon.species.url)
                .then(res => setcolor(res.data.color.name))
                .catch(err => console.log(err))
        }
    }, [pokemon])

    return (

        <div className='card_pokemonCard' onClick={handleClick} style={{ border: `6px solid ${color}`, background: `linear-gradient(${color},white)` }}>
            <img className='card_pokemonImage' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            <div className='card_info'>
                <div style={{ color: `${color}` }} className='card_pokemonName'>
                    {pokemon?.name}
                </div>
                <div className='card_caracteristics'>
                    {pokemon?.types.map(t => <span style={{ padding: '0px' }} className='type'>
                        {t.type.name}
                    </span>)}
                </div>
                <div className='card_caracteristics type'>Type</div> <hr />
                <div className='card_properties'>
                    {pokemon?.stats.map(s => <div className='card_states'>
                        <div className='state_name'>{s.stat.name}</div> <div className='state_base' style={{ color: `${color}` }} >{s.base_stat}</div>
                    </div>)}
                </div>
            </div>
        </div>


    )
}
export default Cards