import React from 'react';
import './App.css';
import { Card } from  'semantic-ui-react'
import { GridMod } from "./GridMod";


export function CardMod(props) {
    const CardArray = [];
    props.value.forEach(element => {
            CardArray.push(<Card
            header={element.name}
            description={`height: ${element.height}  mass: ${element.mass}  hair color: ${element.hair_color} skin color: ${element.skin_color}`}
            />)
    })
        

    return <GridMod cardap={CardArray} />
}