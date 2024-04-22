import React from 'react'
import { CardItem } from '../CardItem/CardItem'
import './CardContainer.css'

export const CardContainer = ({ arreglo }) => {
    return (
        <main className='card_container'>
            <ul className='card_list'>
                {
                    arreglo.map((data, index) => <CardItem key={index} data={data} /> )
                }
            </ul>
        </main>
    )
}
