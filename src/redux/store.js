import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import phonebook from './phonebook/phonebook-reducers';

const rootReducer = combineReducers({
  phonebook: phonebook,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
