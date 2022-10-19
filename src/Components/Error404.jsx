import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div style={{display:'flex' ,flexDirection:'column',height:'100vh' }}>
      <h1 style={{textAlign:'center'}}>Error404 | Page not found</h1>
      <Link className='card_link' style={{textAlign:'center'} } clas to='/' >Back Home</Link>
    </div>
  )
}

export default Error404