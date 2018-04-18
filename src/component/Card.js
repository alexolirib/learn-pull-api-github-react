import React from 'react'

const Card = (props) => {
    return (
        <div>
            <img src={props.avatar_url} className="imgBlock" alt="img" />
            <div className="description">
                <h2>{props.name}</h2>
                <h3>{props.company}</h3>
            </div>
        </div>
    )
}

export default Card;