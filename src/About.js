import React from 'react'
import image1 from './image1.jpeg';
import image2 from './image2.jpeg';
// import './App.css';
export const About = () => {
  
let para={
    "textAlign":"justify",
    "marginLeft":"5%",
    "marginRight":"5%",
    "font-size":"1em",
    'color':"aliceblue",
    
 }
 const divStyle={
    margin:'0',
    padding:'2px',
    // overflowY: 'scroll',
    overflowX: 'hidden',
    width:'95vw',
    position:'relative'
  };


    return (
        <div className='main'>
        <div className="About" style={divStyle}> 
            <h3 className="mt-3 heading" style={{"color":'rgb(117, 178, 231)',"text-align":"center","font-size":"2em"}}>This is a <span>Super Hero Console!</span></h3>
            <p style={para}> 
            Dear User,<br/>You are Welcome to This Super Giants/Heros Console. It is quite User Friendly and Entertaining.
           <ul>
             <li>  At the <b>Home Page</b> (Click the "Giants Club" in header) You can serach any hero and get his/her details,interests,powerstats etc. 
                   {/* <div className="imge"><img src={image1} alt="" /></div> */}
             </li> 
             <li>At the <b>Play Trump Cards Page</b> (in header) You can Select a Random power and play with the computer.
                The person with more points in that powerstat will get earn a score nd the winner will be the one with maximum scores.
             </li>
            </ul>    
                After completion you can click the Show Results button to see the winner.
                {/* <br/>**Note: you can also Keep the task for next time all you need to do is click the done button again to mark it as undone. */}
                <br/>Hope U like this Simple webApp, enjoy and have Fun! :)
                </p>
            
               <div className="Playcards"> 
               <div className="imge"><img src={image2} alt="" /></div>
               <div className="imge"><img src={image1} alt="" /></div>
               </div>

            <hr style={{"backgroundColor":'rgb(117, 178, 231)',width:"90%"}}/>
            <h3 className="mt-3" style={{"color":'rgb(117, 178, 231)',"text-align":"center","font-size":"2em"}} >Know the Creator</h3>
            <p style={para} className="mb-5">
                I am a Software Developer with profound interest in designing Web Apps.<br/>
                I believe in the Principle of Learn and Grow.
                Being fascinated and passionate about Tech world, I am pursuing Graduation In Computer Science and Engineering.
                <br/>
                With Knowldege of various programming languages like C, C++, Python, Java and JavaScript, I acquired Skills in Object Oriented Programming, Data Structures, DataBase Management Systems and Machine Learning. 
                Also an active member of various Tech socities like DSC, WWC and Social Organisations like NCC and Art of Living.
                <br/><br/>Get connected with me if you like!
                </p>
        </div>
        </div>

    )
}
