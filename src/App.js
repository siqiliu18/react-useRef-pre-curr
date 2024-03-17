import "./App.css";

// get current num and previous num : render only one time approach
function App() {
  const [number, setNumber] = useState(0);
  const previousValue = useRef(null);

  useEffect(() => {
    previousValue.current = number;
  });

  return (
    <div>
      <h4>number: {number}</h4>
      <h4>Render count: {previousValue.current}</h4>
      <button
        onClick={() =>
          setNumber((previous) => {
            return previous + 1;
          })
        }
      >
        increment
      </button>
    </div>
  );
}

export default App;

/* get current and previous names : render only one time
export function App(props) {
  const [name, setName] = useState("");
  // const [preVal, setPreVal] = useState(null)
  const previousValue = useRef(null);

  useEffect(() => {previousValue.current = name})
 
    return (
        <div>
          <input value={name} onChange={(e) => setName(() => {
            // setPreVal(prename);
            return e.target.value
          })} />
          <div> My name is {name} and it used to be {previousValue.current} </div>
        </div>
    );
}
*/

/* render two time approach
// Filename - App.js
 
import React, { useState } from "react";
 
const App = () => {
    const [number, setNumber] = useState(0);
    const [previousValue, setPreviousValue] =
        useState(null);
 
    return (
        <div
            style={{
                textAlign: "center",
                alignItems: "center",
                margin: "auto",
            }}
        >
            <h1 style={{ color: "green" }}>
                GeeksforGeeks
            </h1>
            <h3>
                React Example to excess previous state in
                Funtional components
            </h3>
            <h4>number: {number}</h4>
            <h4>previous number: {previousValue}</h4>
            <button
                onClick={() =>
                    setNumber((previous) => {
                        setPreviousValue(previous);
                        return previous + 1;
                    })
                }
            >
                increment
            </button>
        </div>
    );
};
 
export default App;
------------------------
import React, {useState, useEffect, useRef} from 'react';

export function App(props) {
  const [name, setName] = useState("");
  const [preVal, setPreVal] = useState(null)
  // const previousValue = useRef(null);

  // useEffect(() => {previousValue.current = number})
 
    return (
        <div>
          <input value={name} onChange={e => setName((prename) => {
            setPreVal(prename);
            return e.target.value
          })} />
          <div> My name is {name} and it used to be {preVal} </div>
        </div>
    );
}
*/
