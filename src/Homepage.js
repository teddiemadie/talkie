import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div>
        <p>this is homepage</p>
        <Link to={'/login'}>
            <p>Login</p>
        </Link>
    </div>
  )
}

export default Homepage