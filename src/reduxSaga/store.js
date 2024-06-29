import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import rootReducer from "./rootReducer";

let sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;