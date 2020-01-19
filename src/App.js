import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
  const count = useSelector(state => state.count);
  const color = useSelector(state => state.color);
  const dispatch = useDispatch();

  const renderBoxes = () => {
    let tempArray = []

      Array.from(Array(count)).forEach((x, i) => {
      tempArray.push(
        <div
          style={{
            margin: 10,
            width: 200,
            height: 100,
            border: "1px solid",
            backgroundColor: color
          }}
        >
          <h1>Colorful box</h1>
        </div>
      );
    });

    return tempArray
  };
  return (
    <div className="App">
      <div style={{ marginBottom: 10 }}>
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

      {renderBoxes()}
    </div>
  );
}

export default App;
