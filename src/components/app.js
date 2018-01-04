import React, {Component} from 'react';
import '../assets/css/app.css';
import Card from './card';
import cardData from '../assets/helpers/card_data';
import {doubleArray, shuffleArray} from '../assets/helpers';


class App extends Component {
    constructor(props){
        super(props);

        this.state= {
            firstCardIndex: null,
            cards: [],
            matches: 0,
            attempts: 0,
            gameState: 'ready'
        };

        this.flipCard = this.flipCard.bind(this);
        this.blockClick = false;
    }

    componentDidMount(){
        this.setState({
            cards: shuffleArray(doubleArray(cardData))
        })
    }

    handleCardClick(index){
        if(this.blockClick) return;
        const {firstCardIndex, cards} = this.state;
        let matches = this.state.matches;
        let attempts = this.state.attempts;
        let cardIndex = null;
        let gameState = this.state.gameState;

        if(firstCardIndex === null){
            console.log("first card clicked");

            cardIndex = index;

            this.flipCard(index);

        } else {
            console.log("second card clicked");
            this.blockClick = true;
            attempts++;
            const card1 = cards[firstCardIndex].front;
            const card2 = cards[index].front;

            if (card1 === card2){
                console.log("match");
                matches++;


                if(matches === cards.length/2){
                    console.log("You win!");

                    gameState = "won";
                }

                this.blockClick = false;

            } else {
                console.log("nope");

                setTimeout(()=>{
                    this.flipCard(firstCardIndex);
                    this.flipCard(index);
                    this.blockClick = false;
                }, 1000);


            }

            this.flipCard(index);

        }

        this.setState({
           firstCardIndex : cardIndex,
            matches: matches,
            attempts: attempts,
            gameState: gameState
        });

    }

    flipCard(index){
        const newCards = this.state.cards.slice();

        newCards[index].flipped = !newCards[index].flipped;

        this.setState({
            cards: newCards
        });

    }

    render(){

        const {cards, matches, attempts} = this.state;

        const cardElements = cards.map((card, index)=>{
            return (
                <Card flip={()=>{this.handleCardClick(index)}} card={card} key={index} />
            );
        });

        return (
            <div className="app">
                <h1>Memory Match</h1>
                <h3>Accuracy: { attempts ? Math.round((matches/attempts) * 10000)/100 : 0}%</h3>
                <div className="game-board">
                    {cardElements}
                </div>
                <h1>{this.state.gameState === 'won' ? 'You won!' : ''}</h1>
            </div>
        );
    }
}

export default App;
