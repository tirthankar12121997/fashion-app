import { com } from 'react-redux';
import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import sidebarReducer from './sidebarReducer';

export default combineReducers({
    //define reducers here
    sidebar: sidebarReducer,
    cart: cartReducer
})