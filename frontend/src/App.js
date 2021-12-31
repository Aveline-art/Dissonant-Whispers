import Navbar from "./Components/Navbar/Navbar";
import Diceroller from "./Widgets/DiceRoller/DiceRoller";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container-fluid">
        <Diceroller />
      </div>
    </div>
  );
}

export default App;
