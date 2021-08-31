import React from "react";
import "./App.css";

import { Game } from "./components/board/view/game";
import { Popup } from "./components/board/view/popup";

function App() {
  return (
    <div className="App">
      <Popup></Popup>
      <Game></Game>
    </div>
  );
}

export default App;
