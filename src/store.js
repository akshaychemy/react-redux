import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import { ExampleReducer } from './reducer';

const middleware = [thunk]
const store = createStore(
    ExampleReducer,
    applyMiddleware(...middleware)
    )

export default store;