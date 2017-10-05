import { combineReducers, createStore } from "redux";
import todos from "./reducers";

const store = createStore(combineReducers({ todos }));

export default store;
