import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Components/Home'
import Error404 from './Components/Error404'
import PokemonByid from './Components/PokemonByid'
import PokemonCard from './Components/PokemonCard'
import ProtectedRoutes from './Components/ProtectedRoutes'
import PokemonNotFound from './Components/PokemonNotFound'
import Config from './Components/Config'
import { useState } from 'react'

function App() {

const [Number, setNumber] = useState(4)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<PokemonCard Number={Number}  />} />
          <Route path='/pokedex/:id' element={<PokemonByid />} />
        </Route>
        <Route path='/pokemonNotFound' element={<PokemonNotFound />} />
        <Route path='/config' element={<Config  setNumber={setNumber} />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App
