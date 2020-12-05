import { com } from 'react-redux';
import { combineReducers } from 'redux';
import sidebarReducer from './sidebarReducer';

export default combineReducers({
    //define reducers here
    sidebar: sidebarReducer
})