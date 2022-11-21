import { Link } from "react-router-dom"
// este componente solo existe en este archivo 
const CharactesByhero = ({alter_ego, characters}) => 
   (alter_ego === characters) ? (<></>): // retorna nada
   <p>{characters}</p>;


export const HeroCard = ({
  id, 
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters 
}) => {
  
  const heroImagenUrl = `/assets/heroes/${id}.jpg`

  // const charactesByhero = (<p>{characters}</p>);

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImagenUrl} className="card-img" alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{ alter_ego }</p>
              {/* solo muestra si son diferentes op 1*/}
              {/* { (alter_ego!==characters) && charactesByhero } */}
              <CharactesByhero alter_ego={alter_ego} characters={characters}/>
              <p className="card-text">
                <small className="text-muted">{ first_appearance }</small>
              </p>

              <Link to={`/hero/${id}`}>Más..</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
