export const ADD_TO_CART = "ADD_TO_CART"

const startLoading = () => {
  return {
    type: "START_LOADING"
  }
}
// action creator
export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item
  }
}