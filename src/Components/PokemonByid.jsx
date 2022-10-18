import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Images/HEADER.png'
import Pokedex from '../Images/POKEDEX.png'
import './Styles/PokemonbyId.css'

const PokemonByid = () => {

  const { id } = useParams()
  const [pokemon, setpokemon] = useState()
  useEffect(() => {
    if (id) {
      URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
      axios.get(URL)
        .then(res => setpokemon(res.data))
        .catch(err => console.log(err))
    }
  }, [id])
  console.log(pokemon)

  return (
    <div className='card_id'>
      <img className='card_header' src={Header} alt="" />
      <img className='card_image_card' src={Pokedex} alt="" />
      <div className='card_principal'>
        <img className='card_pokeImage' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        <h1 className='principal_tittle' >#{pokemon?.order}</h1>
        <h1 className='principal_name'>{pokemon?.name}</h1>
        <hr />
        <div className='card_caract'>
          <span>Height<br />{pokemon?.height}</span>
          <span>Weight<br />{pokemon?.weight}</span>
        </div>
        <div className='card_caracteris'>
          <div >
            <p className='card_type'>Types</p>
            <div className='card_types'>
              {pokemon?.types.map(t => <span className='types'>{t.type.name}</span>)}
            </div>
          </div>
          <div>
            <p className='card_abili'>Abilities</p>
            <div className='card_ability'>
              {pokemon?.abilities.map(a => <span className='card_abi'>{a.ability.name}</span>)}
            </div>
          </div>
        </div>
        <h2 className='subtittle'>Stats</h2><hr />
        <div className='stats'>
          {pokemon?.stats.map(s => <><div className='stat'><span>{s.stat.name}</span><span>{s.base_stat}/{s.base_stat + 100}</span></div><div className='card_bar'><div className='card_minibar'></div></div> </>)}
        </div>

      </div>
      <div className='card_move'>
        <h2 className='subtittle'>Movements</h2> <hr />
        <div className='card_movements'>
          {pokemon?.moves.map(m => <div className='card_m'>{m.move.name}</div>)}
        </div>
      </div>



    </div>
  )
}

export default PokemonByid