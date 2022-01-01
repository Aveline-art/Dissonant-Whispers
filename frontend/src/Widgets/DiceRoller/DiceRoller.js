import { useState } from "react";

function DiceRoller() {
  const dice = [
    useState({ name: "d4", count: 0, sides: 4 }),
    useState({ name: "d6", count: 0, sides: 6 }),
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
        <div className="btn-group-vertical">
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
        <div className="col-2">
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
      <div className="btn-group me-2" role="group" aria-label="First group">
        <button type="button" className="btn btn-primary">
          {die.name}
        </button>
        <button
          onClick={() => increment(die)}
          type="button"
          className="btn btn-outline-secondary"
        >
          +
        </button>
        <button
          onClick={(e) => decrement(die)}
          type="button"
          className="btn btn-outline-secondary"
        >
          -
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Table
        </button>
      </div>
      <div
        className="btn-group me-2 col-2"
        role="group"
        aria-label="First group"
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
