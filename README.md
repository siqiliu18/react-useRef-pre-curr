# Two ways of getting the previous values

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Using two useStates [example](https://www.geeksforgeeks.org/how-to-get-previous-state-in-reactjs-functional-component/)

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

- But this means each time, the program renders twice

## useEffect + useRef [example](https://www.youtube.com/watch?v=t2ypzz6gJm0)

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

- This method only render once - by useState. useEffect API is invoked when rendering happens. useRef doesn't trigger a rerendering.
