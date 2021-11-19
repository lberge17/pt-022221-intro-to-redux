// reducer is a pure function - take in state and action and returns a new state
import { ADD_TO_CART } from "./actions";

const initialState = {
  items: [
    {
      id: 1,
      name: "Fall Pumpkins",
      price: 10
    },
    {
      id: 2,
      name: "Candy Corn",
      price: 5
    },
    {
      id: 3,
      name: "Assorted Popcorn",
      price: 20
    },
    {
      id: 4,
      name: "Scarecrow",
      price: 30
    }
  ],
  cart: [1,1,3,4],
  total: 70
}

// const actionObj = {type: "ADD_TO_CART", payload: {id: 1, name: "Candy Corn", price: 10}}

export default function reducer(state = initialState, action){
  switch (action.type) {
    case ADD_TO_CART:
      
      return {
        ...state,
        cart: [...state.cart, action.payload.id],
        total: state.total + action.payload.price
      };
  
    default:
      return state;
  }
};
