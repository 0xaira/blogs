import React from 'react'
import ThemeSwitch from './ThemeSwitch'

const Navbar = () => {
  return (
    <header>
        <nav className='flex justify-center gap-48 mt-2'>
            <h1>Aira Jena</h1>
            <ThemeSwitch />
        </nav>
    </header>
  )
}

export default Navbar