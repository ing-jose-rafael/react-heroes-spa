import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth'

export const PublicRouter = ({children}) => {
  const { authState:{logged} } = useContext(AuthContext);
  // const { logged } = authState;
  return ( !logged ) ? children  : <Navigate to='/dc'/>
}
