import React from 'react'

export const MiniSearch = ({ setIsOpen, searchLocation, guests }) => {
    return (
        <ul onClick={() => setIsOpen(true)} className='search_bar_mini'>
            <li className='item_search_mini'>
                <input type="text" value={searchLocation != ''? searchLocation: ''} placeholder='Location' readOnly />
            </li>
            <li className='item_search_mini'>
                <input type="text" value={guests != 0? guests: ''} placeholder='Guests' readOnly />
            </li>
            <li className='item_search_mini'>
                <i className="fa-solid fa-magnifying-glass"></i>
            </li>
        </ul>
    )
}
