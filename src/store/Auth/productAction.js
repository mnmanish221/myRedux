import { ActionType } from "./productActionType";
import axios from 'axios';

export const fetchProducts = (product) => {
    return {
        type: ActionType.FETCH_PRODUCTS,
        payload: product
    }

}

export const authLogin = (data) => { 

    return async (dispatch, getState) => {
    const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/login',data);
    dispatch({
      type: ActionType.AUTH_LOGIN,
      payload: response,
    });
    }
}