# Two ways of getting the previous values

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Using two useStates [example](https://www.geeksforgeeks.org/how-to-get-previous-state-in-reactjs-functional-component/)
```
// Filename - App.js

import React, { useState } from "react";

const App = () => {
const [number, setNumber] = useState(0);
const [previousValue, setPreviousValue] = useState(null);

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
```
- **But this means each time, the program renders twice**

## useEffect + useRef [example](https://www.youtube.com/watch?v=t2ypzz6gJm0)
```
import React, {useState, useEffect, useRef} from 'react';

export function App(props) {
const [number, setNumber] = useState(0);
const previousValue = useRef(null);

useEffect(() => {previousValue.current = number})

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
```
- **This method only render once - by useState. useEffect API is invoked when rendering happens. useRef doesn't trigger a rerendering.**

## Better explanation
```
import React, {useState, useEffect, useRef} from 'react';

export function App(props) {
  const [name, setName] = useState("");
  // const [preVal, setPreVal] = useState(null)
  const previousValue = useRef(null);

  useEffect(() => {
    console.log(name)
    previousValue.current = name;
  }, [name])
 
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
```
### Keep three things in mind
1. useState() causes re-render.
2. useRef() doesn't cause re-render.
3. useEffect() runs after re-render or its input exists and changes

### Logic flow:
1. name = "" previousValue = null.
2. Put "a" in the text field, setName() runs and changes the value of name = "a". Component renders, {name} is "a", but {previousValue.current} is still "null" or empty.
3. Because component rendered, useEffect was invoked and set previousValue.current = "a" behind the seen.
4. Add "b" after "a" in the text field. setName() runs and changes the value of name = "ab". Component renders, {name} is "ab", now {previousValue.current} is "a".
5. Compnent rendered, useEffect was invoked and set previousValue.current = "ab" behine the seen. 
