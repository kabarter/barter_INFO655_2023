import React from "react";
import "./App.css";
import TodosList from "./components/TodosList.js";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TodosList />
      </header>
    </div>
  );
}

export default App;