// модули
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

//действия
import * as actions from './phonebook-actions';

const contacts = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [actions.filter]: (_, { payload }) => payload,
});

export default combineReducers({ contacts, filter });
