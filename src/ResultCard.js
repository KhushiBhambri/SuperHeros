import React from 'react'
import './Card.css'

export const ResultCard = (props) => {
    return (
        <div className="resultwrap">
            <div className="Resultcard">
                <h2>Your Result Card!</h2>
                <div className="scoresc"> <h3> You: <span>{props.s1}</span></h3>
                 <h3> Computer : <span>{props.s2}</span></h3></div>
                 <div className="message">
                 {(props.s1>props.s2)?(<div className='Win'><h1>Congratulations! You won the Game.</h1>
                                        <p>Keep Playing and Winning !</p></div>)
                        :(
                            (props.s2>props.s1)?(<div className='Loss'><h1>Oops! You lost it!</h1>
                                <p>Better Luck Next time!!</p></div>)
                                    :(<div className='Tie'><h1>It was a Tie!</h1>
                                        <p>Play again and See who will win!</p></div>)
                        )
                 }
                 </div>

            </div>
        </div>
    )
}
