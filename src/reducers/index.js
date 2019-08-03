import { combineReducers } from "redux";
import { coinReducer } from "./СoinsInfo";


export const rootReducer = combineReducers({
    coinsData: coinReducer,
});

