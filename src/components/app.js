import React, {Component} from 'react';
import '../assets/css/app.css';
import Card from './card';
import cardData from '../assets/helpers/card_data';


class App extends Component {
    constructor(props){
        super(props);

        this.state= {
            cards: cardData
        };

        this.flipCard = this.flipCard.bind(this);
    }

    flipCard(index){
        const newCards = this.state.cards.slice();

        newCards[index].flipped = !newCards[index].flipped;

        this.setState({
            cards:newCards
        });
    }

    render(){

        const cardElements = this.state.cards.map((card, index)=>{
            return (
                <Card flip={()=>{this.flipCard(index)}} card={card} key={index} />
                    );
        });

        return (
            <div className="app">
                <h1>Memory Match</h1>
                {cardElements}
            </div>
        );
    }
}

export default App;
