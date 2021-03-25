import React,{useContext,useReducer,createContext} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({reducer, initialState, childern}) => (
    <AuthContext.Provider value={useReducer(reducer,initialState)}>
        {childern}
    </AuthContext.Provider>
)

export const useAuthValue = () => useContext(AuthContext);