import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import Header from '../Images/HEADER.png'
import '../Components/Styles/PokemonCard.css'
import Pokedex from '../Images/POKEDEX.png'
import Cards from './Re-use/Cards'
import { Link, useNavigate } from 'react-router-dom'
import Loading from '../Images/LOADING.gif'


const PokemonCard = ({ Number }) => {
  const [pokemonsName, setPokemonsName] = useState()
  const [type, settype] = useState()
  const [name, setname] = useState()
  const [group, setgroup] = useState()
  const [move, setmove] = useState(0)
  const navigate = useNavigate()
  const number = +Number

  const userName = useSelector(state => state.userName)
  const selectType = e => {
    setname()
    settype(e.target.value)
    setmove(0)
  }
  const getName = e => {
    e.preventDefault()
    settype()
    setname(e.target[0].value.trim().toLowerCase())
    setmove(0)
  }

  const getNumber = e => {
    e.preventDefault()
    setmove(e.target.id)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }


  useEffect(() => {
    let URL
    if (name) {
      URL = `https://pokeapi.co/api/v2/pokemon-form/${name}`
      axios.get(URL)
        .then(res => {
          const result = [res.data.pokemon]
          setgroup()
          setPokemonsName(result)
        })
        .catch(err => navigate('/pokemonNotFound'))
    }
    else if (!type) {
      URL = 'https://pokeapi.co/api/v2/pokemon/'
      axios.get(URL)
        .then(function (res) {
          const g = []
          const arr = function (id) {
            const a = []
            for (let index = id; index < number + id; index++) {
              if (res.data.results[index])
                a.push(res.data.results[index])
            }
            return a
          }
          for (let i = 0; i < res.data.results.length; i = i + number) {
            g.push(arr(i))
          }
          setgroup(g)
          return setPokemonsName(g[move])
        }
        )
        .catch(err => console.log(err))
    }
    else {
      URL = `https://pokeapi.co/api/v2/type/${type}/`
      axios.get(URL)
        .then(function (res) {
          const result = res.data.pokemon.map(e => e.pokemon)
          const g = []
          const arr = function (id) {
            const a = []
            for (let index = id; index < number + id; index++) {
              if (result[index]) {
                a.push(result[index])
              }
              else break
            }
            return a
          }
          for (let i = 0; i < result.length; i = i + number) {
            g.push(arr(i))
          }

          setgroup(g)
          return setPokemonsName(g[move])
        })
        .catch(err => console.log(err))
    }
  }, [type, name, move])


  const [species, setspecies] = useState()
  useEffect(() => {
    URL = 'https://pokeapi.co/api/v2/type'
    axios.get(URL)
      .then(res => setspecies(res.data.results))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      {pokemonsName ?
        <div className='card_pokedex'>
          <img className='card_header' src={Header} alt="image header" />
          <img className='card_image_card' src={Pokedex} alt='pokedex image' />
          <div className='card_pokemones'>
            <p className='card_text'><span style={{ color: 'red' }}>Welcome {userName}</span> , here you can find all the pokemons </p>
            <form onSubmit={getName} className='card_form_search' action="">
              <input className='card_input' type="text" placeholder='Write your favorite pokemon' />
              <button className='card_button'>Search</button>
              <select style={{ textTransform: 'capitalize', color: 'white' }} onChange={selectType} className='card_select' name="Species" id="selectspecie">
                <option className='card_option' selected='true' disabled='disabled'>Search here</option>
                {species?.map(s => <option key={s.url} className='card_option' style={{ textTransform: 'capitalize' }} value={s.name}>{s.name}</option>)}
              </select>
              <Link to='/config'><button className='card_config'  >⚙</button></Link>
            </form>
            <div className='card_pokemonCards'>
              {pokemonsName?.map(pokemon => <Cards url={pokemon.url} />)}
            </div>
          </div>
          <div className='card_contain'>
            <div className='card_buttons'>
              {group?.map(function (g, i, a) {
                return <button className='button_number' onClick={getNumber} id={i}>{i + 1}</button>
              })}
            </div>
          </div>
        </div> : <img className='card_loading' src={Loading} alt="Loading" />}
    </div>
  )
}

export default PokemonCard