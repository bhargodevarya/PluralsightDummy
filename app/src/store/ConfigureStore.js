import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

const ConfigureStore = (initialState) => {
    console.log('configuring store')
    return createStore(
        RootReducer, initialState, applyMiddleware(reduxImmutableStateInvariant())
    );
}

module.exports = ConfigureStore