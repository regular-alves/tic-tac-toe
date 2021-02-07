import React from 'react';
import Board from '../Board';
import './style.css';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if(this.calculateWinner() || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([
        {squares: squares}
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(x) {
    this.setState({
      stepNumber: x,
      xIsNext: (x % 2) === 0,
    });
  }

  calculateWinner() {
    const history = this.state.history;
    const { squares } = history[this.state.stepNumber];

    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2]
    ];

    for(let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]) {
        return squares[a];
      }
    }

    return null
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner();

    const moves = history.map((step, move) => {
      return (
        <li key={move} onClick={() => this.jumpTo(move)}>
          <Board onClick={false} squares={step.squares}/>
        </li>
      )
    })

    return (
      <div className="game">
        <div className="game-board">
          <Board onClick={(i) => this.handleClick(i)} squares={current.squares}/>
        </div>
        <div className="game-info">
          <div className="game-status">
            <div className="phrase">{winner ? 'Winner' : 'Next player'}</div>
            <div className="player">{winner ? winner : (this.state.xIsNext ? 'X' : 'O')}</div>
          </div>
          <ol className="history">{ moves }</ol>
        </div>
      </div>
    );
  }
}

export default Game;