// reducer is a pure function - take in state and action and returns a new state

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

const action = {type: "ADD_ITEM", payload: {price: 10, id: 5}}

export default function reducer(state = initialState, action){
  return state
};
