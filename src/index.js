import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import stockReducer  from "./Redux/ReduxReducers";
import { applyMiddleware, createStore } from "redux";

const store = createStore(stockReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
