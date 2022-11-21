import { Navigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();
  const hero = getHeroById( id );
  // si no existe el hereo lo saco de la pantalla
  if (!hero ) {
    return <Navigate to='/dc'/>
  }

  return (
    <h1>Hereo</h1>
  )
}
