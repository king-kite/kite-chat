import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/index";
import "./dist/css/lib/bootstrap.min.css";
import "./dist/css/style.css";
import "./dist/css/swipe.min.css";
// import "./dist/css/mine.dark.css";

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhances(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
