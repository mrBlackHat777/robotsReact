import React from 'react'
import './card.styles.css'
export const Card=(props)=>(
    <div className='card-container'>
        <img src={`https://robohash.org/${props.monster.id}?size=180x180`}/>
        <h1>{props.monster.name}</h1>
        <h2>{props.monster.email}</h2>
    </div>

)

