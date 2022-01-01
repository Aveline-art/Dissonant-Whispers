import { useState } from "react";

function DiceRoller() {
  const dice = [
    useState({ name: "d4", count: 0, sides: 4 }),
    useState({ name: "d6", count: 0, sides: 6 }),
    useState({ name: "d8", count: 0, sides: 8 }),
    useState({ name: "d10", count: 0, sides: 10 }),
    useState({ name: "d12", count: 0, sides: 12 }),
    useState({ name: "d20", count: 0, sides: 20 }),
    useState({ name: "d100", count: 0, sides: 100 }),
  ];
  const [total, setTotal] = useState(0);
  const [results, setResults] = useState([]);

  function rollDice(dice) {
    let total = 0;
    let allRolls = [];
    for (const die of dice) {
      let rolls = {
        die: die[0].name,
        rolls: [],
      };

      for (let i = 0; i < die[0].count; i++) {
        const roll = Math.ceil(Math.random() * die[0].sides);
        rolls.rolls.push(roll);
        total += roll;
      }

      allRolls.push(rolls);
    }
    setTotal(total)
    setResults(allRolls)
  }

  return (
    <div className="container">
      <div className="row my-5">
        <div className="btn-group-vertical col-3">
          {dice.map((dieState, index) => {
            return <DieCounter key={index} die={dieState} />;
          })}
        </div>
      </div>
      <div className="row my-2">
        <button
          type="button"
          className="btn btn-primary col-2"
          onClick={() => rollDice(dice)}
        >
          Roll!
        </button>
        <div className="col-1">
          <input
            className="form-control form-control-sm"
            type="text"
            value={total}
            aria-label=".form-control-sm example"
            disabled
          ></input>
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
      className="btn-toolbar"
      role="toolbar"
      aria-label="Toolbar with button groups"
    >
      <div className="btn-group me-2 col-8" role="group" aria-label="First group">
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
      <div
        className="btn-group me-2 col-2"
        role="group"
        aria-label="Second group"
      >
        <input
          className="form-control form-control-sm"
          type="text"
          value={die.count}
          aria-label=".form-control-sm example"
          disabled
        ></input>
      </div>
    </div>
  );
}

export default DiceRoller;
