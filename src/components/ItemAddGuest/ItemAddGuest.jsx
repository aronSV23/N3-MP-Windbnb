import React from 'react'
import { AddGuestBtns } from '../AddGuestBtns/AddGuestBtns'

export const ItemAddGuest = ({ showOptions, esInput, guests, setGuests, childGuests, setChildGuests, adultGuests, setAdultGuests }) => {

    return (
        <li className='item_search'>
            <div onClick={showOptions} className='item_search_guests'>
                <label htmlFor="guests">GUESTS</label>
                <input type="text" value={guests > 0 ? guests : ''} placeholder='Add guests' id='guests' min='0' readOnly />
            </div>
            {esInput === 'guests' &&
                <section className='section_guests'>
                    <AddGuestBtns title={'Adults'} subtitle={'Ages 13 or above'} guests={guests} setGuests={setGuests} setTypeGuest={setAdultGuests} typeGuest={adultGuests} />
                    <AddGuestBtns title={'children'} subtitle={'Ages 2-12'} guests={guests} setGuests={setGuests}  setTypeGuest={setChildGuests} typeGuest={childGuests} />
                </section>
            }
        </li>
    )
}
