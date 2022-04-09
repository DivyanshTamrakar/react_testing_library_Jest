import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [change, setchange] = useState(false);
  return (
    <div className="App">
      <button
        style={{ backgroundColor: change ? "blue" : "red" }}
        onClick={() => setchange(!change)}
      >
        {change ? "Change color to red" : "Change color to blue"}
      </button>
    </div>
  );
}

export default App;
