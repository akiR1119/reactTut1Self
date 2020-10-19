import React from 'react';
import Board from './board';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        const field = Array(9).fill(null);
        this.state = {
            historty: [[field]],
            nextPlayerIsX: true, 
        }
    }
    handleClick(i) {
        let history = this.state.history;
        let newSquares = history[history.length];
        newSquares[i] = this.state.nextPlayerIsX ? "X" : "O";
        this.setState({nextPlayerIsX: !this.state.nextPlayerIsX});
        console.log(newSquares);
        history.push(newSquares);
        this.setState(this.state.history);
    }
    render() {
        return (
            <div>
                <Board 
                    history={this.state.history} 
                    nextPlayerIsX={this.state.nextPlayerIsX}
                    onClick={this.handleClick}
                />
            </div>
        )
    }
}