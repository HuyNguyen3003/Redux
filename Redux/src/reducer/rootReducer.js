import { combineReducers } from 'redux';


import counterReducer from './counterReducer';
import useReducer from "./userReducer";


const rootReducer = combineReducers({

    counter: counterReducer,
    useReducer: useReducer

});

export default rootReducer;