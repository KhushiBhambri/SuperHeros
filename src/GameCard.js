import React from 'react'
import { NavigationType } from 'react-router-dom';
import './Card.css';
import {useState,useEffect} from 'react'

export const GameCard = ({h,v,ps,pslist,s1,s2,show,set_show}) => {

let hk,vk
if(h && v ){
             hk= h.powerstats[pslist[ps].toLowerCase()];
             vk= v.powerstats[pslist[ps].toLowerCase()];
}
   
function setres1(){
    set_show(hk,vk)
}   

function setres2(){
    set_show(vk,hk)
}
return (
        <div>
        <div className="Scores">
            {/* <h3>You : {(hk>vk)?(s1+1):s1} </h3>
            <h3>Computer : {(hk<vk)?(s2+1):s2}</h3> */}

            <h3>You : {s1} </h3>
            <h3>Computer : {s2}</h3>
            
         </div>
        <div className="gamecard">
        <div className="hero" onClick={setres1}>
            <h5 >{(h.biography.fullName)?(h.biography.fullName):h.name}</h5>
               <div>
                 <img src={h.images.md} alt="Your Hero image" className="avatarc"/>
               </div>
               {(show)?
                <div className="stat">
                    <h5 style={{color:'white'}}><strong>{pslist[ps]} : </strong>{hk}</h5>
                </div>
               :""}
        </div>
        {/* {(compare)?<button onClick={setscores}>Compare!</button>:""} */}
        <div className="villian" onClick={setres2}>
            <h5 >{(v.biography.fullName)?(v.biography.fullName):v.name}</h5>
                <div>
                 <img src={v.images.md} alt="Comp. Hero image" className="avatarc"/>
                </div>
                {(show)?
                    <div className="stat">
                    <h5 style={{color:'white'}}><strong>{pslist[ps]} : </strong>{vk}</h5>
                    </div>
                :""}
        </div>
        </div>
        </div>
        
    )
}


