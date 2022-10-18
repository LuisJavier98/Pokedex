import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div>
      <h1>Error404 | Page not found</h1>
      <Link to='/' >Back Home</Link>
    </div>
  )
}

export default Error404