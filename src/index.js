import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

import * as serviceWorker from "./serviceWorker";

const initialState = {
  count: 1,
  color: 'pink',
  boxColors: [null]
};

function countReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        ...state,
        color: action.payload
      }
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      };
    case "RESET":
      return {
        ...state,
        count: 0
      };
    case "CHANGE_SPECIFIC_BOX":
      console.log('Loi')
      const boxColors = state.boxColors
      boxColors[action.payload.index] = action.payload.color
      return {
        ...state,
        boxColors: boxColors
      }
    default:
      return state;
  }
}

const store = createStore(
  countReducer,
  // Hooks up Redux Devtools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
