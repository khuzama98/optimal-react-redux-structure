import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';


import { admin } from './admin/reducer'
import { user } from './user/reducer'


export default createStore(combineReducers({

    admin,
    user

}),
    applyMiddleware(thunk)
);
