import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
  
  /**
   * para obtener la navegación, para redirigir a la misma pagina
   * pero el la url los parametros de la consulta  
   */
  const navigate = useNavigate(); 
  // para obtener los query params
  const location = useLocation();

  const { q ='' } = queryString.parse( location.search )
  
  const heroes = getHeroesByName( q );

  const {searchText,onInputChange} = useForm({
    searchText:q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if(searchText.trim().length <= 1) return;

    // Navegando haesta misma pagina con parametros
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  }



  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">

        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSearchSubmit }> 
            <input type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange = { onInputChange }
            />
            <button className="btn btn-outline-info mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Result</h4><hr />

          <div className="alert alert-primary">
            Search a hero
          </div>
          
          <div className="alert alert-danger">
            No hero with <b>{q}</b>
          </div>
          {
            heroes.map(hero => (

              <HeroCard key={ hero.id } {...hero}/>
            ))
          }
        </div>
      </div>
    </>
  )
}
