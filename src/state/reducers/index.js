//Since There can be so many reducers to perform a certain type of action.
//To wrap all reducers into  one reducer i.e to warp different reducer function into one reducer function,We use combineReducers.
import { combineReducers } from "redux";
import amountReducers from './amountReducers'

const reducer=combineReducers({
    amount :amountReducers              //Since there is only one amountReducers ,if there are so many Reducers we will use comma and add all reducers here
})                                      //Here amount is make to behave as a state variable
export default reducer