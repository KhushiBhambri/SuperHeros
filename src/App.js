import axios from 'axios'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {useState,useEffect} from 'react'
import { GetHero} from './GetHero'
import { Header }  from "./Header";  
import { Footer } from "./Footer";
import {About} from "./About";
import Play from "./Play";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

const [Hero,setHero]= useState(null)
const [H,setH]=useState([])

const getSuper_hero= ()=>{
const options = {
  method: 'GET',
  url: 'https://superhero-search.p.rapidapi.com/api/',
  params: {hero: Hero},
  headers: {
    'x-rapidapi-host': 'superhero-search.p.rapidapi.com',
    'x-rapidapi-key': 'e1ec5ee025msheafea28c7527a81p1c06ccjsna6799d3f3c60'
  }
};
  axios.request(options).then((response) =>{
     console.log(response.data);
       make_card(response.data);

  }).catch((error) =>{
    console.error(error);
  });
}
 

function make_card(data){
  console.log(data.biography.fullName)
   setH([data])
}


useEffect(()=>{
    if(Hero) getSuper_hero()   
},[Hero])

// function handleKeyDown(e) {
//   if (e.key === 'Enter') {
//     setHero(e.target.value)
//   }}

return (
    <div className="App">
     
        <Router>
        <Header title="The Giants Club"/>
        <Routes>

          <Route path="/" element={<GetHero h={Hero} seth={setHero} H={H}/>}></Route>
          <Route exact path="/play" element={<Play/>} />
          <Route exact path="/about" element={<About/>} />

        </Routes> 
        <Footer/>
        </Router>   
    </div>

  );
}

export default App;
