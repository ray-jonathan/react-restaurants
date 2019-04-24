import React from 'react';
import restaurants from './restaurants';


function ListOfTypes(props){
    const types = Object.keys(restaurants);
    return(
        <>
            <h3>Types of restaurants: </h3>
            <ul>
                {types.map((type, i) => <li key={i}>
                    <button value={type} onClick={props.restaurantChooser}>
                        {type}
                    </button>
                </li>)}
            </ul>
        </>
    )
}


export default ListOfTypes;