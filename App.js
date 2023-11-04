import { useState } from "react";
import "./index.css";
const Workers = [
  {
    name: "David",
    position: "CEO",
  },
  {
    name: "Joseph",
    position: " MD - 1",
  },
  {
    name: "Esther",
    position: "MD - 2",
  },
];

function App() {
  const [startingAcc, setStartingAcc] = useState(0);
  const [closingAcc, setClosingAcc] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <Header />
      <Main
        startingAcc={startingAcc}
        closingAcc={closingAcc}
        onSetStartingAcc={setStartingAcc}
        onSetClosingAcc={setClosingAcc}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <FinalAccount
        isOpen={isOpen}
        startingAcc={startingAcc}
        closingAcc={closingAcc}
      />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <img src="" alt="DJE logo" />
      <ul>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
}

function Main({
  workers,
  startingAcc,
  closingAcc,
  onSetClosingAcc,
  onSetStartingAcc,
  setIsOpen,
  isOpen,
}) {
  const [worker, setWorker] = useState(workers);

  const profit = closingAcc - startingAcc;
  const btnStyle = {
    width: "128px",
    height: "35px",
    padding: "10px 14px",
    borderRaduis: "4px",
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log("worked");
    setIsOpen((isOpen) => !isOpen);
    console.log(isOpen);
  }

  return (
    <form>
      <div>
        <label>Account By: </label>
        <select value={worker} onChange={(e) => setWorker(e.target.value)}>
          <option value="">select a worker</option>
          <option value="Dave">Dave</option>
          <option value="Esther">Esther</option>
        </select>
      </div>
      <div>
        <label>Capital: </label>
        <input type="number" value="500000" placeholder="0.00" disabled />
      </div>
      <div>
        <label>Starting Account: </label>
        <input
          type="number"
          value={startingAcc}
          placeholder="starting"
          onChange={(e) => onSetStartingAcc(e.target.value)}
        />
      </div>
      <div>
        <label>Closing Account: </label>
        <input
          type="number"
          value={closingAcc}
          placeholder="closing"
          onChange={(e) => onSetClosingAcc(e.target.value)}
        />
      </div>
      <div>
        <label>profit: </label>
        <input type="number" value={profit} placeholder="amount" disabled />
      </div>
      <div>
        <label>Debtors: </label>
        <input type="text" value="debts" placeholder="amount" />
      </div>
      <div>
        <label>Daily Target: </label>
        <input type="number" value="6100" placeholder="6100" disabled />
      </div>
      <button onClick={handleSubmit} style={btnStyle}>
        close Account
      </button>
    </form>
  );
}
function FinalAccount({ startingAcc, closingAcc, isOpen }) {
  return (
    <div className="final-account">
      {isOpen ? (
        <div>
          <p>
            Today starting account was: <span>{startingAcc}</span>
          </p>
          <p>
            Today closing account is: <span>{closingAcc}</span>
          </p>
          <p>
            final Statement:
            <span>
              compared to the capital <em>you are losing or gaining</em>
            </span>
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
