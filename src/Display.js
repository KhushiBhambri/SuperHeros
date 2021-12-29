import React from 'react'
import './Display.css';
export const Display = ({h}) => {
    
    const [ActiveCard,setActiveCard]=React.useState('Bio')

    function AliasList(props) {
        const aliases = props.aliases;
        const listItems = aliases.map((alias) =>
          <li key={alias}>
            {alias}
          </li>
        );
        return (
          <ul>{listItems}</ul>
        );
      }

      function Affiliations(props) {
        const aff = props.aff;
        const myArray = aff.split(",");
        const listItems = myArray.map((aff) =>

          <li key={aff}>
            {aff}
          </li>
         
        );
        return (
          <ul>{listItems}</ul>
        );
      }


      function Relatives(props) {
        const rel = props.rel;
        const myArray = rel.split(/\)[,,;]/);
        const listItems = myArray.map((rel) =>
          <li key={rel}>
            {rel}
          </li>
        );
        return (
          <ul>{listItems}</ul>
        );
      }

      function expandCard (event){
        //  console.log(event.currentTarget)
         setActiveCard(event.currentTarget.id)
      }


    return (
      <div>
          {h && 
        <div className='Biodata'>
            <div className='Head active'>
                <img src={h.images.md} alt="" className="avatar"/>
                <div style={{'textAlign':'center'}}>
                  <h2>Hello! I am {h.name}</h2>
                  <h3>{h.biography.fullName}</h3>
                </div>
            </div>

            <div id='Bio' className={('Bio'==ActiveCard)?"card1 active":"card1"}
            onClick={(e)=>expandCard(e)}>
              <div className='l'>
                <h2>BioGraphy</h2>
                <ul>
                    <li>My full Name is : {h.biography.fullName}</li>
                    <li>I first appeared in : {h.biography.firstAppearance}</li>
                    <li>My Place of birth is : {h.biography.placeOfBirth}</li>
                    <li>My Publisher Name is : {h.biography.publisher}</li>  
                </ul>
              </div>  
            </div>

            <div id='appearance' className={('appearance'==ActiveCard)?"card1 active":"card1"}
            onClick={(e)=>expandCard(e)}>
              <div className='l'>
                  <h2>Appearance</h2>
                  <ul>
                      <li>Eyecolor : {h.appearance.eyeColor}</li>
                      <li>Gender : {h.appearance.gender}</li>
                      <li>HairColor: {h.appearance.hairColor}</li>
                      <li>Race: {h.appearance.race}</li>
                      <li>Height: {h.appearance.height[0]} / {h.appearance.height[1]}</li>
                      <li>Weight: {h.appearance.weight[0]} / {h.appearance.weight[1]}</li>
                  </ul>
              </div>
            </div>

            <div id='powerstat'className={('powerstat'==ActiveCard)?"card1 active":"card1"}
            onClick={(e)=>expandCard(e)}>
              <div className='r'>
                  <h2>Power Stats</h2>
                  <ul>
                      <li>Combat : {h.powerstats.combat}</li>
                      <li>Durability : {h.powerstats.durability}</li>
                      <li>Intelligence: {h.powerstats.intelligence}</li>
                      <li>Power: {h.powerstats.power}</li>
                      <li>Speed: {h.powerstats.speed}</li>
                      <li>Strength: {h.powerstats.strength}</li>
                  </ul>
              </div>
            </div>

            <div id='relatives' className={('relatives'==ActiveCard)?"card1 active":"card1"}
            onClick={(e)=>expandCard(e)}> 
              <div className='r'>
                        <h2>Relatives</h2>
                        <Relatives rel={h.connections.relatives}/>  
              </div> 
            </div>

            <div id='grpaff' className={('grpaff'==ActiveCard)?"card1 active":"card1"}
            onClick={(e)=>expandCard(e)}>
              <div className='l'>
                        <h2>Group Affiliations</h2>
                        <Affiliations aff={h.connections.groupAffiliation}/>
              </div>
            </div>

            <div id='alias' className={('alias'==ActiveCard)?"card1 active":"card1"}
            onClick={(e)=>expandCard(e)}>
               {(ActiveCard=='alias')? 
               (<div className='r'>
                  <h2>Aliases </h2>
                  <AliasList aliases={h.biography.aliases} />
              </div>):<h2>Aliases </h2>}
            </div>                                
                
        </div>
        }
    </div> 
    )
}
