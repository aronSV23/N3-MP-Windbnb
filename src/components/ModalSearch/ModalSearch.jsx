import React, { useState } from 'react'
import { ItemAddGuest } from '../ItemAddGuest/ItemAddGuest'
import { ItemSearchLocations } from '../ItemSearchLocations/ItemSearchLocations'
import './ModalSearch.css'

export const ModalSearch = ({ setIsOpen, flats, guests, setGuests, searchLocation, setSearchLocation, flatsFilter,  childGuests, setChildGuests, adultGuests, setAdultGuests  }) => {
    const [esInput, setEsInput] = useState('')

    const showOptions = (e) => {
        setEsInput(e.target.id)
    }

    const handelMoldal = (e) => {
        if (e.target.id === 'modal') {
            return setIsOpen(false)
        }
    }

    return (
        <div id='modal' onClick={handelMoldal} className='modal'>
            <div className='modal_search'>
                <h3 className='modal_subtitle'>Edit your search</h3>
                <ul className='search_bar'>
                    <ItemSearchLocations showOptions={showOptions} esInput={esInput} flats={flats} searchLocation={searchLocation} setSearchLocation={setSearchLocation} />
                    <ItemAddGuest showOptions={showOptions} esInput={esInput} guests={guests} setGuests={setGuests} setAdultGuests={setAdultGuests} adultGuests={adultGuests} setChildGuests={setChildGuests} childGuests={childGuests} />
                    <li className='item_search'>
                        <div className='item_search_button'>
                            <button onClick={flatsFilter}>
                                <i className="fa-solid fa-magnifying-glass"></i>
                                search
                            </button>
                        </div>
                    </li>
                </ul>
                <span onClick={() => setIsOpen(false)} className="close">&times;</span>
            </div>
        </div>
    )
}
