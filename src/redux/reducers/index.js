import { combineReducers } from "redux";
import UserReducer from "./UserReducers";

let rootReducer = combineReducers({
  data: UserReducer,
});

export default rootReducer;
