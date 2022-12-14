import { types } from "../types/types";

// const initialState = {
//   logged: false,
// };
// aca no se debe llamar el localStore
export const authReducer = ( state = {}, action ) => {
  switch (action.type) {
    case types.login:
      // por si en un futuro tenemos más atributos en state por eso desestructuramos
      return {
        ...state,
        logged: true,
        user: action.payload
      };

    case types.logout:
      return {
        logged: false,
      };
  
    default:
      return state;
  }
}