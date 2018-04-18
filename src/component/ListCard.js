import React from 'react'
import Card from './Card'


const ListCard = (props) =>{
    return(
        <div>
            {props.card.map(item=><Card key={item.id} {...item} />)}
        </div>
    )
}

export default ListCard;