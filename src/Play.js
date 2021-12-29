import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import "./Play.css"
import "./Card.css";
import Wheel from './wheel';
import {Card} from './Card'
import {GameCard} from "./GameCard"
import {Bg} from "./Bg"
import {ResultCard} from './ResultCard'


function Play() {
const [heros,setheros]= useState(null)
const [villians,setvillians]= useState(null)
const [idx,setidx] = useState(0)
const [playbut,setplaybut]= useState(true)
const [wheel,setwheel]= useState(true)
const [powerstat,setpowerstat]=useState(-1)
const[score1,setscore1]=useState(0)
const[score2,setscore2]=useState(0)
const[Result,setResult]=useState(false)
const[show,setshow]=useState(false)
const[messagetag,setmessagetag]=useState("")
// console.log("abcd")


const psarr=["Combat","Durability","Strength","Power","Intelligence","Speed"]

const Get_data=()=>{
    console.log("powerstat : ",powerstat)
    setplaybut(false)
    // setwheel(false)
    Get_Heros();
    Get_villians();
}

const Get_Heros=async()=>{
    const options = {
        method: 'GET',
        url: 'https://superhero-search.p.rapidapi.com/api/heroes',
        headers: {
          'x-rapidapi-host': 'superhero-search.p.rapidapi.com',
          'x-rapidapi-key': '1e56441b45msh478f46e7761bf4bp157213jsn8fd5946ad25c'
        }
      };
    
    const response = await axios.request(options)
        console.log("Random Heros below: ")
        console.log(response.data)
        setheros(response.data)  
        // console.log(heros);
}

const Get_villians=()=>{
const options = {
    method: 'GET',
    url: 'https://superhero-search.p.rapidapi.com/api/heroes',
    headers: {
      'x-rapidapi-host': 'superhero-search.p.rapidapi.com',
      'x-rapidapi-key': '1e56441b45msh478f46e7761bf4bp157213jsn8fd5946ad25c'
    }
  };
    
    axios.request(options).then((response)=> {
        console.log("Random Villians below: ")
        console.log(response.data)
        setvillians(response.data)
    }).catch( (error)=> {
        console.error(error);
    });
}

function set_powerstat(x){
  setpowerstat(x)
  setwheel(false)
}

function showResult()
{
  setResult(true);
}

function set_show(user,comp){
  if(!show){
       if(user>comp){
         setscore1(score1+1)
          setmessagetag("win")
        }
       else if(user<comp){
         setscore2(score2+1)
        setmessagetag("lose")
       }
       setshow(true)
       console.log("user selected => ",user," ",messagetag)
  }
}

function set_id(){
  console.log("powerstat : ",powerstat)

  setpowerstat(-1)
    setwheel(true)
    setidx(idx+1)
    setshow(false)   
}

// console.log("id : ",idx)
if(powerstat>=0) var powerst= psarr[powerstat].toLowerCase()
return (
  <div className='main2'>
  {(Result)? (  <div><Bg/>
                   <ResultCard s1={score1} s2={score2}/></div>)
    :(<div className="wrapper">
        <div className="header">
          {
            (wheel)?
            (<div className="wheelbg">
            <Wheel list={["Combat","Durability","Strength","Power","Intelligence","Speed"]} ps={powerstat} setps={set_powerstat}    />
            </div>)
            :<h1>The <span>{psarr[powerstat]} </span>War.</h1>
          }
        </div>
        {(powerstat>=0)?
            <div className="Playground">       
            {
            (playbut && powerstat>=0)?
            <button className="playbutton" onClick={Get_data}>Play Now!</button>
            :""
            }
        { heros && villians && powerstat>=0 &&
        ( 
          <div>
            <div className="Play">
            {(show)?(<div>{
                (messagetag=="win")?
                 <h1 style={{color:'rgb(13, 184, 13)'}}>Great!!</h1>
                 :(
                    (messagetag=="lose")?
                     <h1 style={{color:'red'}}>Oops!!</h1>
                     :
                    <h1 style={{color:'yellow'}}>Tie!!</h1>
                  )
                 }
              </div>):
              (<div><h1 style={{color:'grey'}}>Choose one Card</h1></div>)
            }

            <div><GameCard h={heros[idx]} v={villians[idx]} ps={powerstat} pslist={psarr} s1={score1} s2={score2} show={show} set_show={set_show}/></div>
            </div>
            
            {              
            (show && idx<15 && powerstat>=0)?
            <button className="Next playbutton" onClick={set_id}> Next! </button>
            :((show)?
            (<div className="result">
              <button className="Result playbutton" onClick={showResult}> show Result!</button>
            </div>):"")
            }


        
            {/* <FlipCard/> */}
          </div>
        )}
      </div>
      :""
      }
    </div>
  )
}
  
  {/* ResultCard */}
</div>  
)
}

export default Play;

// powerstats me choice
// hover cards game selection
