import React from "react";
import './calcresults.css';
import dogphoto from '../images/dog.png'
import { useEffect,useState } from "react";
let age;

export function CalcResults({tasks}){
   // console.log('cb',tasks)
    let val=0;
    //let path;
    const [path,setPath]=useState('');
    const [myurl,setMyurl]=useState('');
    
    useEffect(()=>{
        if(path){
            const imageUrl = new URL(`/src/images/${path}.png`, import.meta.url).href;
            setMyurl(imageUrl);
        }else{
            setPath('');
        }
            
        
    },[path])

    useEffect(()=>{
        calcage();
    },[tasks.breedval])
    
    if(!tasks){
        console.log('sin breed al results')
        
        return;
    }

    const calcs=(val1,val2,cont)=>{
            if(tasks.age==='1'){
                    age=val1;
                }else if(tasks.age==='2'){
                    age=val2;
                }else if(tasks.age>='3'){
                    for(let f=0;f<(Number(tasks.age)-2);f++){
                        val+=cont;
                        //console.log(val)
                    }
                    age=val2+val;
                }
    }

    function calcdog(){
        switch(tasks.dogbreed){
            case 'tiny':
                calcs(20,28,4)
                break;
            case 'middle':
                calcs(18,27,6)
                break;
            case 'large':
                calcs(16,22,9)
                break;
    }
}

    const calcothers=(resultsvalue)=>{
        switch(resultsvalue){
            case 'cat':
                calcs(15,24,4)
                break;
            case 'bunny':
                calcs(20,26,6)
                break;
            case 'fish':
                calcs(18,26,8)
                break;
            case 'bird':
                calcs(15,30,15);
        }
    }

    const calcage=()=>{
        if(tasks.breedval==='DOG'){
            setPath('dog')
            //path='./src/images/dog.png'
            calcdog();
        }else if(tasks.breedval==='CAT'){
            calcothers('cat');
            setPath('cat')
            //path='./src/images/cat.png'
        }else if(tasks.breedval==='BUNNY'){
            calcothers('bunny');
            setPath('bunny')
           // path='./src/images/bunny.png'
        }else if(tasks.breedval==='BIRD'){
            calcothers('bird');
            setPath('bird')
        // path='./src/images/bird.png'
        }else{
            calcothers('fish')
            //path='./src/images/fish.png'
            setPath('fish')
        }
    }
    //calcage();
    return(
        <>
        <section className="col-12 col-sm-12 col-md-6 col-lg-6 col-xg-6 font-xs font-sm font-md font-lg font-xl">
            <article className="result-container">
                <h2>Results:</h2>
                <p>Your {tasks.breedval} age is: {age}</p>
                <img src={myurl||dogphoto} alt="pet" className="results-image"/>
            </article> 
        </section>
            
        </>
        
    );
}