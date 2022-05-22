import {applyMiddleware, createStore} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";
import {mainReducer} from "./index";
import {persistStore, persistReducer} from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
}

export default () => {
    const persistedReducer = persistReducer(persistConfig, mainReducer.reducer)

    const persistedStore = createStore(persistedReducer, applyMiddleware(thunk))

    const persistor = persistStore(persistedStore)

    return {
        persistedStore,
        persistor,
    }
}