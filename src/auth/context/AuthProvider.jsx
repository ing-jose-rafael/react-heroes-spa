import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

const initialSatate = {
  logged:false,
}

export const AuthProvider = ({ children }) => {

  const [authState, dispatch] = useReducer(authReducer, initialSatate);
  
  return (
    /** como inicialmente no se tiene valor se manda {} */
    <AuthContext.Provider value={{}}>
      { children }
    </AuthContext.Provider>
  )
}
