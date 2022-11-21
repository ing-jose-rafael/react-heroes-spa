import { heroes } from "../data/heroes";
/**
 * funcion que filtra segun el publisher que reciba como argumento
 * @param {*} publisher DC Comics o Marvel Comics
 * @returns Lista de heroes 
 */
export const getHeroesByPublisher = ( publisher ) => {
  
  const validPublisher = ['DC Comics','Marvel Comics'];
  if ( !validPublisher.includes( publisher )) {
    throw new Error(`${publisher} is not a valid publisher`);
  }

  return heroes.filter(heroe => heroe.publisher === publisher );
} 