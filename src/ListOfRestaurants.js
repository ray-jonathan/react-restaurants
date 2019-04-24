import React from 'react';
import restaurants from './restaurants';

// class ListOfRestaurants extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     render(){

function ListOfRestaurants(props){
    const names = Object.keys(restaurants[props.restType]);
    return(
        <>
            <h3>Names of {props.restType} restaurants: </h3>
            <ul>
            {names.map((name, i) => <li key={i}><button value={name} onClick={props.handHand}>{name}</button></li>)}
                
            </ul>
        </>
    )
}

// }
// function ListOfRestaurants(props){
//     const names = Object.keys(restaurants.mediterranean);
//     return(
//         <>
//             <h3>Names of mediterranean restaurants: </h3>
//             <ul>
//             {names.map((name, i) => <li key={i}>{name}</li>)}
                
//             </ul>
//         </>
//     )
// }

export default ListOfRestaurants;