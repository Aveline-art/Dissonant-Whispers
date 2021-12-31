import { useReducer, useState } from "react";

function useDice(list) {
    const item = list.map((i) => {
        return useState({name: i, count: 0})
    })

    return item
}

function DiceRoller() {
  

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-2 btn-group-vertical">
          
        </div>
        <div className="col-6">
        </div>
      </div>
    </div>
  );
}

function DieCounter({ die, ...props }) {
  return (
    <div
      className={`btn-group ${props.className}`}
      role="group"
      aria-label="First group"
    >
      <button type="button" className="btn btn-primary col-4">
        {die.name}
      </button>
      <button
        onClick={() => {
          props.dispatch({ index: props.index, type: "increment" });
        }}
        type="button"
        className="btn btn-outline-secondary col-2"
      >
        +
      </button>
      <button
        onClick={() =>
          props.dispatch({ index: props.index, type: "decrement" })
        }
        type="button"
        className="btn btn-outline-secondary col-2"
      >
        -
      </button>
      <button type="button" className="btn btn-outline-secondary col-4">
        Table
      </button>
    </div>
  );
}

export default DiceRoller;