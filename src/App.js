import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
  const state = useSelector(state => state);
  const boxColors = useSelector(state => state.boxColors);

  const dispatch = useDispatch();

  const renderBoxes = () => {
    let tempArray = [];
    Array.from(Array(state.count)).forEach((x, i) => {
      const boxColor = boxColors[i] || state.color;
      tempArray.push(
        <div
          key={i}
          style={{
            margin: 10,
            width: 200,
            height: 100,
            border: "1px solid",
            backgroundColor: boxColor
          }}
        >
          <h1>Colorful box</h1>
          <input
            onChange={e =>
              dispatch({
                type: "CHANGE_SPECIFIC_BOX",
                payload: { color: e.target.value, index: i }
              })
            }
          ></input>
        </div>
      );
    });
    return tempArray;
  };

  return (
    <div className="App">
      <div style={{ marginBottom: 10 }}>
        <h1>{state.count}</h1>
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
