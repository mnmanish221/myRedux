import { combineReducers } from "redux";
import { AuthReducer } from "./Auth/reducdr";

const reducer = combineReducers({
    Auth: AuthReducer
})


export default reducer