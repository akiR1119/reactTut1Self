import React from 'react';

export default class Square extends React.Component {
    render() {
        return(
            <div className="square" key={this.props.number} onClick={this.props.onClick}>
                {this.props.number}
            </div>
        );
    }
}