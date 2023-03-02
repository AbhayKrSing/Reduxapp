import {applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk"; //thunk use to run asynchronous fn ,but here we use it as middleware
import reducer from "./reducers";



export const store=createStore(reducer,{},applyMiddleware(thunk))