let initialState = {
  cart: []
}
export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_CATEGORIES_HOMEPAGE':
      return { ...state, categoriesHomePage: action.payload }
    default:
      return state;
  }
}