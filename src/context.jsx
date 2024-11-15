import React from 'react';
import { useContext, createContext } from 'react';
import data from './data'

const AppContext = createContext()

const AppProvider = ({children}) => {


  return ( 
    <AppContext.Provider 
      value={{
        data
        }}>
        {children}
    </AppContext.Provider>
   );
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
 
export {AppContext, AppProvider};