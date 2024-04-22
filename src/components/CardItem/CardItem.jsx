import React from 'react'
import './CardItem.css'

export const CardItem = ({ data }) => {
    const beds = data.beds > 1? data.beds + ' beds' : data.beds + ' bed'

    return (
        <li className='card_item'>
            <figure>
                <img src={data.photo} alt={data.title} />
            </figure>
            <div className='title_rating_container'>
                <div>
                    {data.superHost &&
                        <span className='card_superhost'>Super Host</span>
                    }
                    <span className='card_type_beds'>{data.type}. {data.beds != null ? beds : ''} </span>

                </div>
                <span className='card_rating'><i className="fa-solid fa-star"></i>{data.rating}</span>
            </div>
            <h3 className='card_title'>
                {data.title}
            </h3>
        </li>
    )
}
