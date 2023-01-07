import {ActionType} from './productActionType'

const initialState = [{
    Auth: [],
    products: []
}];

export const AuthReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.FETCH_PRODUCTS:
            return { ...state, product: payload }
        case ActionType.AUTH_LOGIN:
            return {...state, Auth: payload}
        default: 
            return state
    }
}