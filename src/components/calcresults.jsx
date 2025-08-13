import React from "react";
import './calcresults.css';
import dogphoto from '../images/dog.png'
import { useEffect,useState } from "react";
//let age;

export function CalcResults({tasks}){
   //console.log('cb',tasks.age)
  
    //let path;
    const [path,setPath]=useState('');
    const [myurl,setMyurl]=useState('');
    const [soloage,setSoloage]=useState('');
    
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
        //console.log('calcs',typeof tasks.age)
          let val=0;
            if(Number(tasks.age)===1){
                    setSoloage(val1);
                }else if(Number(tasks.age)===2){
                    setSoloage(val2);
                }else if(Number(tasks.age)>=3){
                    for(let f=0;f<(Number(tasks.age)-2);f++){
                        val+=cont;
                        //console.log(val)
                    }
                    setSoloage(val2+val);
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
        //console.log('calcothers')
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
                calcs(5,18,9);
                break;
        }
    }

    const calcage=()=>{
        //console.log('calcage')
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
        }else if(tasks.breedval==='PARAKEET'){
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
                <p>Your {tasks.breedval} age is: {soloage}</p>
                <img src={myurl||dogphoto} alt="pet" className="results-image"/>
            </article> 
        </section>
            
        </>
        
    );
}