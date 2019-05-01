import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <nav className='navbar navbar-expand-md navbar-dark bg-info'>
    <div className='container'>
        <Link className='navbar-brand' to='/'>Tareas</Link>
    </div>
    </nav>
)

export default Header