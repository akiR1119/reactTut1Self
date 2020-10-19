import React from 'react';
import Square from './square';

export default class Board extends React.Component {
    renderSquareRow(i) {
        let squareRow = [];
        for(let ii = 0; ii < 3; ii++){
            squareRow.push(
                <Square 
                    key={(i*3)+ii} number={(i*3)+ii}
                    onClick={this.props.onClick}
                />)
        }
        return(<div className='board-row'>{squareRow}</div>);
    }
    renderSquare() {
        let squares = [];
        for(let i = 0; i < 3; i++){
            squares.push(this.renderSquareRow(i));
        }
        return(
            <div>
                {squares}
            </div>
        )
    };

    render() {
        return(
            <div className="squares">
                {this.renderSquare()}
            </div>
        );
    }
}