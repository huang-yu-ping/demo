import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
//reducers
import { localReducer } from "./reducers/index";
//dev-tool redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
//thunk
const enhancer = composeEnhancers(applyMiddleware(thunk));

const allReducer = combineReducers({
  local: localReducer
});

const store = createStore(allReducer, enhancer);

export default store;
