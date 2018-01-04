import React from 'react';
import '../assets/css/card.css';

const Card = props => {
    const {flip, card: {front, back, flipped}} = props;
    return (
        <div className="card-container">
            <div className={`card ${flipped ? 'flipped' : ''}`}>
                <div className="front">
                    <img src={front}/>
                </div>
                <div onClick={flip} className={`back `}>
                    <img src={back}/>
                </div>
            </div>
        </div>
    )
}

export default Card;