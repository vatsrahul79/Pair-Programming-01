import React,{createContext} from 'react'
import { render } from '@testing-library/react'


export const AppContext = createContext()

export function AppProvider (props){
    return (
        <AppContext.Provider value={{name:"context"}}>
            {props.children}
        </AppContext.Provider>
    )

}