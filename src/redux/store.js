// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer,persistCombineReducers } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to local storage


// const persistConfig = {
//     key: 'root',
//     storage,
//   }
// export const store = configureStore({
//   reducer: {},
// })
// const persistedReducer = persistReducer(persistConfig, rootReducer)
// export const persistor = persistStore(store)
// // Infer the `RootState` and `AppDispatch` types from the store itself

// export default () => {
//     let store = createStore(persistedReducer)
//     let persistor = persistStore(store)
//     return { store, persistor }
//   }
// export type RootState = ReturnType<typeof store.getState>

// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
//@ts-nocheck
// src/redux/store.ts

import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './slices/bookSlice';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['book'], // Add reducer names you want to persist
};

const persistedReducer = persistReducer(persistConfig, bookReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);