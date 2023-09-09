import {combineReducers} from 'redux';
import userDetails from './userDetails/userDetailsSlice';

const appReducer = combineReducers({
  userDetails,
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
