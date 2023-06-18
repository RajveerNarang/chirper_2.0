import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  // const [count, setCount] = useState(0)

  return (
    // using BEM Naming Convention
    <div className="app">
      <h1>Chirper 2.0</h1>

      {/*Sidebar */}
      <Sidebar />

      {/* Chirper Feed */}
      {/*Widgets */}
    </div>
  );
}

export default App;
