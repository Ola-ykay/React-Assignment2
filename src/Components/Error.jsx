import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='section-a'>
     <i class="fa-regular fa-face-frown"></i>
<h1>404</h1>
<p>Oops! page not found</p>
<Link to='/' className='btn'>Go Home</Link>

    </div>
  )
}

export default Error