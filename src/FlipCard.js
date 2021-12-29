import ReactCardFlip from 'react-card-flip';
import React from 'react'

export default class App extends React.Component {
    constructor() {
      super();
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
  
    render() {
      return (
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
          <div style={{'backgroundColor':'aliceblue'}}>
            <p style={{'color':'black'}}>click to have me!</p>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
  
          <div style={{'backgroundColor':'aliceblue'}}>
           <p style={{'color':'black'}}> This is the back of the card.</p>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </ReactCardFlip>
      )
    }
  }