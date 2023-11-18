import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { combineReducers } from 'redux';

import { ExampleReducer } from './reducer';

// const rootReducer = combineReducers({
//     example: ExampleReducer,
//     // Add other reducers if any
//   });
  

const middleware = [thunk]
const store = createStore(
    ExampleReducer,
    applyMiddleware(...middleware)
    )

export default store;