import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
  const count = useSelector(state => state.count);
  const color = useSelector(state => state.color);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div style={{marginBottom: 10}}>
        <h1>{count}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        <input
          onChange={e =>
            dispatch({ type: "CHANGE_COLOR", payload: e.target.value })
          }
        ></input>
      </div>

      <div
        style={{
          width: 500,
          height: 500,
          backgroundColor: color
        }}
      >
        <h1>Colorful box</h1>
      </div>
    </div>
  );
}

export default App;
