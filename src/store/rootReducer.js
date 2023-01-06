import {combineReducers} from "redux";
import cartReducer from "./reducers/cartReducer";

//tüm state toplandığı yer

const rootReducer =combineReducers({
    cart:cartReducer
})

export default rootReducer;