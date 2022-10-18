import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Images/HEADER.png'
import './Styles/Config.css'

const Config = ({ setNumber }) => {

    const navigate = useNavigate()
    const handleChange = e => {
        e.preventDefault()
        setNumber(e.target.value)
        navigate('/pokedex')
    }

    return (
        <div className='card_config2'>
            <img className='card_header' src={Header} alt="Header image" />
            <form className='card_number'>
                <p className='card_text'>How many pokemons do you want to show in your screen?</p>
                <select onChange={handleChange} name="Number" id="" className='card_select'>
                    <option className='card_option' selected='true' disabled='disabled'>Select a number</option>
                    <option className='card_option' value="4">4</option>
                    <option className='card_option' value="8">8</option>
                    <option className='card_option' value="12">12</option>
                    <option className='card_option' value="16">16</option>
                    <option className='card_option' value="20">20</option>
                </select>
            </form>
        </div>
    )
}
export default Config