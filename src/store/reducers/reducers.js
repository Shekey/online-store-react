let initialState = {
  cart: []
}
export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_CART_ITEMS':
      return { ...state, allCartItems: action.payload }
    default:
      return state;
  }
}