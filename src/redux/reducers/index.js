import inputReducer from './userInput';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    inputs: inputReducer,
})

export default allReducers;