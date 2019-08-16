import React, {useEffect, useState} from 'react';
import axios from "axios";
import './App.css';
import  {CardMod}  from  "./CardMod";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characterState, setCharacterState] = useState(null);

  useEffect(() => {
    axios
        .get(`https://swapi.co/api/people`)
        .then(result => {
            return setCharacterState(result.data.results);
        })
  }, [])

  if (characterState === null) {
    return <h2>Loading...</h2>
    
  }
  console.log(characterState);


  return (
		<div>
      <div className="headerImgDiv"></div>
      <CardMod value={characterState} ></CardMod>
		</div>
  )
  
}

export default App;
