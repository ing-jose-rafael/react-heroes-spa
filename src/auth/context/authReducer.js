import { types } from "../types/types";

// const initialState = {
//   logged: false,
// };

export const authReducer = ( state = {}, action ) => {
  switch (action.type) {
    case types.login:
      // por si en un futuro tenemos más atributos en state por eso desestructuramos
      return {
        ...state,
        logged: true,
        name: action.payload
      };

    case types.logout:
      return {
        logged: false,
      };
  
    default:
      return state;
  }
}