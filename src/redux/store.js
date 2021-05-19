import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import phonebook from './phonebook/phonebook-reducers';

import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  phonebook: phonebook,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reduser: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
