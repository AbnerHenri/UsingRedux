import { createStore } from 'redux'

import AsyncStorage from '@react-native-community/async-storage'
import { persistStore, persistReducer } from 'redux-persist'

import Reducers from './Reducers/index'

const PersistReducer = persistReducer({
    key : 'root',
    storage : AsyncStorage,
    whitelist : ['userReducer'],
    // blacklist : []
}, Reducers)


const Store = createStore(PersistReducer)
let Persistor = persistStore(Store)

export { Store, Persistor }