import { useState } from "react";

function DiceRoller() {
  const dice = [
    useState({ name: "d4", count: 0 }),
    useState({ name: "d6", count: 0 }),
  ];

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-2 btn-group-vertical">
          {dice.map((dieState, index) => {
            return <DieCounter key={index} die={dieState} />;
          })}
        </div>
        <div className="col-6">
          {dice.map((dieState, index) => {
            return dieState[0].count;
          })}
        </div>
      </div>
    </div>
  );
}

function DieCounter(props) {
  const [die, setDie] = props.die;

  function increment(die) {
    if (die.count < 100) {
      const copy = Object.assign({}, die);
      copy.count++;
      setDie(copy);
    }
  }

  function decrement(die) {
    if (die.count > 0) {
      const copy = Object.assign({}, die);
      copy.count--;
      setDie(copy);
    }
  }

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
        onClick={() => increment(die)}
        type="button"
        className="btn btn-outline-secondary col-2"
      >
        +
      </button>
      <button
        onClick={(e) => decrement(die)}
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
