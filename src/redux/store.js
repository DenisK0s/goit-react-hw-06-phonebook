import { createStore } from 'redux';

const initialState = {};

const reducer = (state = initialState, action) => state;

const store = createStore(reducer);

export default store;
