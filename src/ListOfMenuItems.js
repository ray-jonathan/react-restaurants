import React from 'react';
import restaurants from './restaurants';

// class ListOfMenuItems extends React.Component{
//     constructor(props){
//         super(props)
//     } 
//     render(){
    
function ListOfMenuItems(props){
    const menu = restaurants[props.restType][props.menuChoice];
    return(
        <>
            <h3>Dishes at {props.menuChoice}: </h3>
            <ul>
            {menu.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </>
    )
}
// }


export default ListOfMenuItems;