import { useReducer } from "react";

function DiceRoller() {
  function diceReducer(state, { index, type }) {
    const die = state[index].clone();
    switch (type) {
      case "increment":
        die.increment();
        break;
      case "decrement":
        die.decrement();
        break;
      default:
        break;
    }

    const newState = Object.assign([], state, { [index]: die });
    return newState;
  }

  const [dice, dispatch] = useReducer(diceReducer, [
    new Die("d4"),
    new Die("d6"),
  ]);

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-2 btn-group-vertical">
          {dice.map((die, index) => {
            return (
              <DieCounter
                key={index}
                index={index}
                die={die}
                dispatch={dispatch}
                className=""
              />
            );
          })}
        </div>
        <div className="col-6">
          {dice[0].count}
          {dice[1].count}
        </div>
      </div>
    </div>
  );
}

class Die {
  constructor(name) {
    this.name = name;
    this._count = 0;
  }

  get count() {
    return this._count;
  }

  set count(val) {
    this._count = val;
  }

  increment() {
    if (this._count < 100) {
      this._count++;
    }
  }

  decrement() {
    if (this._count > 0) {
      this._count--;
    }
  }

  clone() {
    const die = new Die(this.name);
    die.count = this._count;
    return die;
  }
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
