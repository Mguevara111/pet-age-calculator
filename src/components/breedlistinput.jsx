import React from "react";
const breeds=['---','DOG','CAT','BUNNY','PARAKEET','GOLDFISH'];

export function Breedlistinput({dispatch,tasks,mydisabled}){
    

    const change=(e)=>{
        dispatch({ type: 'changebreed', payload: e.target.value});
    }

    return(
        <select name="breed" id="" onChange={change} value={tasks.breedval} 
        disabled={mydisabled}
        className="font-xs font-sm font-md font-lg font-xl">
                {breeds.map(el=>
                    <option value={el} key={el}>{el}</option>
                )}
        </select>
    );
}