import React from "react";
import './calcinput.css';
import { Breedlistinput } from "./breedlistinput";
import { Alert } from "./alert";
import { useState } from "react";

export function Calcinput({dispatch,tasks}){
    //console.log(tasks.breed)
    const [disabled,setDisabled]=useState(false);
    let newdata={};

    function changeform(e){
        //console.log(e.target.value)
        newdata={...tasks.breed,[e.target.name]:e.target.value}
        dispatch({type:'changeform',payload:newdata})
    }

    function submit(e){
        e.preventDefault();
        dispatch({type:'submit',payload:tasks.breed})
        if(tasks.breed.breedval!=='' && tasks.breed.age!==''){
            setDisabled(true)
        }
        
        
    }

    function reset(){
        dispatch({type:'reset'})
        setDisabled(false)
    }

    return(
        <>
        <div className="calcinput-container col-12 col-sm-12 col-md-6 col-lg-6 col-xg-6 font-xs font-sm font-md font-lg font-xl">
        <form action="" onSubmit={submit} className="form">
            <label htmlFor="age">
                Enter your pet age:
                <input type="number" min="1" id="age" name="age" onChange={changeform} value={tasks.breed.age} disabled={disabled} className="font-xs font-sm font-md font-lg font-xl"/>
                human years
                <br />{tasks.msg==='ageorbreed'&&<Alert msg={'Please enter the age'}></Alert>}
            </label><br />
            <label htmlFor="">
                Enter your pet breed:
                <Breedlistinput dispatch={dispatch} name="breed" onChange={changeform} tasks={tasks.breed} mydisabled={disabled}></Breedlistinput><br />
                {tasks.msg==='ageorbreed'&&<Alert msg={'Please select a breed'}></Alert>}
            </label><br />
            {tasks.breed.breedval==='DOG'&&
                <>
                <div className="radios">
                    <label>
                    Tiny:
                    <input type="radio" name='dogbreed'  disabled={disabled} onChange={changeform} value="tiny"/>
                    </label>
                    <label>
                    Middle:
                    <input type="radio" name='dogbreed' disabled={disabled} onChange={changeform} value='middle'/>
                    </label>
                    <label>
                    Large:
                    <input type="radio" name='dogbreed' disabled={disabled} onChange={changeform} value='large'/>
                    </label><br />
                    {tasks.msg==='height'&&<Alert msg={'Please select a dog height'}></Alert>}
                </div>
                </>
                }
            <br />  <button className="btncalc" disabled={disabled} type="submit">Calc</button>
        </form>
        <button onClick={reset} className="btnreset">New Calc</button>
         </div>
        </>
    );
}