// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // Default is localStorage
// import rootReducer from './reducers'; // Import your combined reducers

// // Persist Configuration
// const persistConfig = {
//   key: 'root', // Key for the persisted storage
//   storage,     // Specify the storage type
// };

// // Create a persisted reducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // Create the Redux store with the persisted reducer
// const store = configureStore({
//   reducer: persistedReducer,
// });

// // Create a persistor for managing persisting
// const persistor = persistStore(store);

// export { store, persistor };

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these redux-persist action types
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
