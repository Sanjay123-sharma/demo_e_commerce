import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SliceReducer from './Slice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: "root",
  storage,
 
};
const user=combineReducers({
    product:SliceReducer
})
const persistedReducer = persistReducer(persistConfig, user);
export const myStore=configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
})
export const mypersistor = persistStore(myStore);