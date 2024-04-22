import { useReducer,createContext } from "react";

export const worklistcontext=createContext()
const reducerfuncton =(state,action)=>{
    switch(action.type)
    {
        case 'GET':{
            return action.payload
        }
        case 'Create':
            {
                return [action.payload,...state.workouts]
            }
            
    }
    
}




export const worklistcontextProvider =({children})=>{
    const[state,dispatch]=useReducer(reducerfuncton,{
        workouts:null
    })
    return (
        <worklistcontextProvider value={{...state,dispatch}}>
            {children}
        </worklistcontextProvider>
    )

}