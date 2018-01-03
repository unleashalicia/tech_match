import React from 'react';
import '../assets/css/card.css';

const Card = props => {
    const {flip, card: {front, back, flipped}} = props;
    return (
        <div className="card">
            <div className="front">
                <img src={front}/>
            </div>
            <div onClick={flip} className={`back ${flipped ? 'flipped' : ''}`}>
                <img src={back}/>
            </div>
        </div>
    )
}

export default Card;