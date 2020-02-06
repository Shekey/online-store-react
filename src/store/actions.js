import { store } from '../index';
import axios from 'axios';

const GET_CATEGORIES_HOMEPAGE = 'https://www.mocky.io/v2/5e3ca20c2d00000e00d9588f'

export function getCategoriesHomePage() {
  return (dispatch) => {
    axios.get(GET_CATEGORIES_HOMEPAGE)
    .then((res) => {
      console.log(res)
      dispatch({
        type: 'GET_CATEGORIES_HOMEPAGE',
        payload: res.data
      });
    })
  }
}
