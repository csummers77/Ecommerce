import { combineReducers } from 'redux';
import authReducer from './authReducer'; 
const rootRuducer = combineReducers({
    auth: authReducer
})
export default rootRuducer;