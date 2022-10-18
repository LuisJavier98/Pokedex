import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserNameGlobal } from '../store/slices/userName.slice'
import Pokedex from '../Images/POKEDEX.png'
import Footer from '../Images/FOOTER.png'
import './Styles/Home.css'

const Home = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getName = e => {
    e.preventDefault()
    dispatch(setUserNameGlobal(e.target.firstChild.value.trim()))
    navigate('/pokedex')
  }
  return (
<div className='Home'>
    <div className='card_welcome'>
      <img className='card_image' src={Pokedex} alt="Pokedex image" />
      <h2 className='card_subtittle'>¡Hi trainer!</h2>
      <p className='card_text'>Please , write yout name in the box to start</p>
      <form className='card_form' onSubmit={getName}>
        <input className='card_input' type="text" required placeholder='Write your name' />
        <button className='card_button'>Acceder</button>
      </form>
      <img className='card_footer' src={Footer} alt='footer image' />
    </div>
</div>

  )
}
export default Home