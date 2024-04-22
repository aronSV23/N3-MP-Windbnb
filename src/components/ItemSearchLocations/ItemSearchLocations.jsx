import React, { useState } from 'react'
import { LocationsItem } from '../LocationsItem/LocationsItem'
import './ItemSearchLocations.css'

export const ItemSearchLocations = ({ showOptions, esInput, flats, searchLocation, setSearchLocation }) => {
    const [locations, setLocations] = useState([])

    const searchLocations = (e) => {
        const text = e.target.value.toLowerCase()
        setSearchLocation(e.target.value)
        if (text.trim().length === 0) {
            setLocations([])
            return
        }

        const result = flats.filter(flat => flat.city.toLowerCase().includes(text))
        const flatsLocations = result.reduce((allLocations, flat) => {
            return Array.from(new Set([...allLocations, flat.city + ', ' + flat.country]))
        }, [])

        setLocations(flatsLocations)
    }

    const selectLocation = (location) => {
        setSearchLocation(location)
        setLocations([])
    }

    return (
        <li className='item_search'>
            <div onClick={showOptions} className='item_search_location'>
                <label htmlFor="location">LOCATION</label>
                <input onChange={searchLocations} type="text" placeholder='Add location' id='location' autoComplete='off' value={searchLocation} />
            </div>
            {esInput === 'location' &&
                <section className='section_locations'>
                    <ul className='location_list'>

                        {
                            locations.map((location, index) => <LocationsItem selectLocation={selectLocation} key={index} location={location} />)
                        }
                    </ul>
                </section>
            }
        </li>
    )
}
