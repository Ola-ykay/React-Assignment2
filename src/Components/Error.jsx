import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='section-a'>
<h1>404</h1>
<h2>Oops! </h2> <p>page not found</p>
<Link to='/' className='btn'>Go Home</Link>

    </div>
  )
}

export default Error