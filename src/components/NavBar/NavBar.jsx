import React from 'react'
import logo from '../../assets/logo.svg'
import { MiniSearch } from '../MiniSearch/MiniSearch'
import './NavBar.css'

export const NavBar = ({ setIsOpen, searchLocation, guests }) => {
    return (
        <nav className='nav_bar'>
            <div className='logo'>
                <img src={logo} alt="logo windbnb" />
            </div>
            <div className='options'>
                <MiniSearch setIsOpen={setIsOpen} searchLocation={searchLocation} guests={guests} />
            </div>
        </nav>
    )
}
