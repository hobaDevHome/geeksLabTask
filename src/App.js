import React from "react";
import "./App.css";
import Home from "./pages/Home";

import Searchbar from "./components/SearchBar";
import MenuB from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Searchbar />
      <MenuB />

      <Home />
    </div>
  );
}

export default App;
