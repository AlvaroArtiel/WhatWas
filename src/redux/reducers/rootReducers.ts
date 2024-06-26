import { combineReducers } from 'redux';
import searcher from './searcherReducer';
import { State } from '../../interfaces/ReduxInterfaces'

const rootReducers = combineReducers({
    searcher
    /*, anotherReducer,... */
});

export default rootReducers;