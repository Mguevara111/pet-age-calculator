
// import viteLogo from '/vite.svg'
import { useState,useRef,useReducer } from "react";
import { taskReducer,initialState } from "./components/taskReducer";
import './App.css'
import { Calcinput } from './components/calcinput'
import { CalcResults } from './components/calcresults'
import { Noinfopaw } from "./components/noinfopaw";

const data={
  age:'',
  breedval:'',
  dogbreed:''
}

function App() {
  const [tasks,dispatch]=useReducer(taskReducer,initialState)
  
 
  
  return (
    <>
    
      <section className="header">
        <h2>Pet age calculator</h2>
      </section>
      <article className="main-container row">
        <Calcinput dispatch={dispatch} tasks={tasks} msg={tasks.msg} ></Calcinput>
        
        {tasks.showres?<CalcResults tasks={tasks.results}></CalcResults>:<Noinfopaw></Noinfopaw>} 
      </article>
      <section className="footer"></section>
    
    </>
  )
}

export default App
