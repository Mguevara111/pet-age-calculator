
const data={
  age:'',
  breedval:'',
  dogbreed:''
}

export const initialState = {
  breed: data,
  showres:false,
  results: data,  // Puedes cambiar el nombre
  msg: ''         // Puedes cambiar el nombre
};

export function taskReducer(state,action){
    switch(action.type){
        case 'changebreed':
            const breedValue=action.payload;       //valor que lanza el handlebreedchange
            let newBreedValueForBreedState;
            let newBreedValueForResultsState;
            if(state.breed.breedval!=='---'){
                newBreedValueForBreedState = breedValue;
                newBreedValueForResultsState = breedValue;
                
            }else{
                newBreedValueForBreedState = '';
                newBreedValueForResultsState = '';
               
            } 
            return {
                ...state, // Copia el estado actual para no mutarlo
                breed: {...state.breed, breedval: newBreedValueForBreedState},
                results: {...state.results, breedval: newBreedValueForResultsState}
            };
        case 'changeform':
            //console.log('ap',action.payload)
            return{
                ...state,
                breed:{...state.breed,breedval:action.payload.breedval,age:action.payload.age,dogbreed:action.payload.dogbreed},
                results:{...state.results,breedval:action.payload.breedval,age:action.payload.age,dogbreed:action.payload.dogbreed}
            };
        case 'submit':
                let setShowres;
                let setMsg;
                let setBreed;
                let db=null,bv=null;
                //console.log(action.payload)
            if(action.payload.age==='' || action.payload.breedval===''){
                setShowres=false;
                //ageRef.current.classList.add('form-input-invalid')
                setMsg='ageorbreed'
                //console.log('ingrese edad o raza')
                
            }else if(action.payload.breedval==='DOG' && action.payload.dogbreed===''){
                setShowres=false;
                setMsg='height';
                bv=action.payload.age
                db='DOG';
                //console.log('ingrese tamaño',db)
            }else{
                setMsg=false;
                setShowres=true; 
            }
                if(db!==null){
                    setBreed={...data,age:bv,breedval:db}
                }else{
                    setBreed=data;
                }
                
                //setMsg=false; 
                return {
                    ...state,
                    breed:setBreed,
                    showres:setShowres,
                    msg:setMsg
                };
        case 'reset':
            
            return{
                ...state,
                breed:data,
                results:data,
                showres:false,
                msg:''
            };
        default:
            return state;
    }
}