import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

import './Navbar.css'

const Navbar = () => {
    const [search, setSeacrh] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(!search) return

        navigate(`/search?q=${search}`)
        setSeacrh("")
    }

  return (
    <nav id='navbar'>
        <h2>
            <Link to='/'>
                <BiCameraMovie />MoviesLib
            </Link>
        </h2>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder='Busque um Filme' 
                onChange={(e) => setSeacrh(e.target.value)}
                value={search}
            />
            <button type='submit'>
                <BiSearchAlt2 />
            </button>
        </form>
    </nav>
      
  )
}

export default Navbar