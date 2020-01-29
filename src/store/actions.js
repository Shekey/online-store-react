import { store } from '../index';

export function getAllCartItems() {
  return (dispatch) => {
  dispatch({
    type: 'GET_CART_ITEMS',
    payload: currentPage
  });
  }
}
