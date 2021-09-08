import React from 'react';
import Context from './StoreContext';
import useStorage from '../utils/useStorage'

const StoreProvider = ({ children }) => {
  const [token, setToken] = useStorage('token');

  return (
    <Context.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </Context.Provider>
  )
}


export default StoreProvider;