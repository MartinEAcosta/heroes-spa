import { useContext, useMemo } from "react"
import { AuthContext } from "../../auth"
import { Navigate, useLocation } from "react-router-dom"

export const PrivateRoute = ( { children } ) => {
    
    const { logged } = useContext( AuthContext );
    const { pathname, search } = useLocation();

    const getLastPath = (pathname , search) => {
        return pathname + search;
    };
    
    const lastPath = useMemo( () => getLastPath(pathname, search) , [pathname , search]  );
    localStorage.setItem('lastPath' , lastPath);
    


    return ( logged ) 
    ? children
    : <> < Navigate to="/login" /> </>
    
}
