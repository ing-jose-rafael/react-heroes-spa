import { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

const initialSatate = {
  logged: false,
}

export const AuthProvider = ({ children }) => {

  const [authState, dispatch] = useReducer(authReducer, initialSatate);
  const login = (name) => {
    const action = {
      type: types.login,
      payload:{
        id:'ABC',
        name:name
      }
    };

    dispatch(action);
  }
  return (
    /** como inicialmente no se tiene valor se manda {} */
    <AuthContext.Provider value={{ authState, login:login }}>
      {children}
    </AuthContext.Provider>
  )
}
