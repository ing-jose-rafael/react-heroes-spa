import { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth'

export const PrivateRouter = ({children}) => {
  const { authState:{logged} } = useContext(AuthContext);
  // para recordar la ultima ruta antes de cerrar seccion 
  const { pathname, search } = useLocation(); 
  // const lastPath = useMemo(() => pathname + search, [pathname, search]);
  const lastPath = pathname + search;

  useEffect(() => {
    localStorage.setItem('lastPath',lastPath); // guardando en localStore el ultimo url
  }, [pathname,search])
  
  

  return ( logged ) ? children  : <Navigate to='/login'/>
}
