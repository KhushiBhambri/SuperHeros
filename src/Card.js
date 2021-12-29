import React from 'react'
import './Card.css';
export const Card = ({Hero,h,ps,pslist}) => {
 
  if(h){
    console.log(h.powerstats[pslist[ps].toLowerCase()])
    var k= h.powerstats;
    console.log("k",pslist[ps].toLowerCase());
  }
   

    return (
    <div >
       { 
       h &&
          <div className='card'>
            <h5 style={{color:'white'}}>{Hero} !!</h5>

               <div>
                 <img src={h.images.md} alt="" className="avatarc"/>
               </div>
                
                <div className="stat">
                <h5 style={{color:'white'}}><strong>{pslist[ps]} : </strong>{k[pslist[ps].toLowerCase()]}</h5>

                </div>


              {/* <div className="user-info">
                  <h2>{h.biography.fullName}</h2>     
                  <p>Power Stats of {Hero} are here:</p> 
                  
                <ul>
                  <li><strong>Combat : </strong>{k['combat']}</li>
                  <li><strong>Durability : </strong>{k['durability']}</li>
                  <li><strong>Strength : </strong>{k['strength']} </li>           
                  <li><strong>Power : </strong>{k['power']}</li>
                  <li><strong>Intelligence : </strong>{k['intelligence']}</li>    
                  <li><strong>Speed :</strong>{k['speed']} </li>
                 
                </ul>
                <div id="repos"></div> 
              </div> */}
          </div>
         }
    </div>
    )
}





{/* <div className="card">
            <h1>I am your Favourite {Hero} !!</h1>

               <div>
                 <img src={h[0].image} alt="" className="avatar"/>
               </div>
              
              <div className="user-info">
                  <h2>{h[0].biography.fullName}</h2>     
                  <p>Power Stats of {Hero} are here:</p> 
                  
                <ul>
                  <li><strong>Combat : </strong>{k['combat']}</li>
                  <li><strong>Durability : </strong>{k['durability']}</li>
                  <li><strong>Intelligence : </strong>{k['intelligence']}</li>
                </ul>
                <ul>
                  <li><strong>Power : </strong>{k['power']}</li>
                  <li><strong>speed :</strong>{k['speed']} </li>
                  <li><strong>Strength : </strong>{k['strength']} </li>
                </ul>
                <div id="repos"></div> 
              </div>
            


          </div> */}