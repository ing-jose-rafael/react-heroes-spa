import { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

// const initialSatate = {
//   logged: false,
// }

// para inicializar el estado
const init = () => {
  const user = JSON.parse( localStorage.getItem('user')); // null o user
  return {
    logged: !!user, // true si exite el usuario
    user:user
  }
}

export const AuthProvider = ({ children }) => {

  // const [authState, dispatch] = useReducer(authReducer, initialSatate,init);
  const [authState, dispatch] = useReducer(authReducer, {},init);
  const login = (name) => {
    const user = { id:'ABC', name:name };
    
    const action = {
      type: types.login,
      payload:user
    };
    localStorage.setItem('user',JSON.stringify(user));
    dispatch(action);
  }
  return (
    /** como inicialmente no se tiene valor se manda {} */
    <AuthContext.Provider value={{ authState, login:login }}>
      {children}
    </AuthContext.Provider>
  )
}
