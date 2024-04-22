import React, { useState } from 'react'
import './AddGuestBtns.css'

export const AddGuestBtns = ({ title, subtitle, guests, setGuests,  setTypeGuest, typeGuest }) => {
    const [guest, setGuest] = useState(typeGuest)

    
    const addGuest = () =>{
        setTypeGuest(typeGuest +1)
        setGuest(guest + 1)
        setGuests(guests + 1)
    }

    const restGuest = () =>{
        if (!(guests === 0 || guest === 0)) {
            setTypeGuest(typeGuest - 1)
            setGuest(guest - 1)
            setGuests(guests -1)
        }
    }


    return (
        <div className='btn_guest'>
            <span className='btn_title'>{title}</span>
            <span className='btn_subtitle'>{subtitle}</span>
            <div className='btns'>
                <button onClick={addGuest} ><i className="fa-solid fa-plus"></i></button>
                <span>{guest}</span>
                <button onClick={restGuest}><i className="fa-solid fa-minus"></i></button>
            </div>
        </div>
    )
}
