import React from 'react'

export const LocationsItem = ({location, selectLocation}) => {
    return (
        <li onClick={() => selectLocation(location)}>
            <i className="fa-solid fa-location-dot"></i>
            <p>{location}</p>
        </li>
    )
}
