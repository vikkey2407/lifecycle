import React from "react";
import Con from "./Constructor";
import BeforeRender from "./GetDerivedStateFromClass";
import Change from "./ComponentDidMount";
import Update from "./Update";
function App() {
  return (
    <div className="App">
      <Con />
    <BeforeRender favflim="MASTER"/>
    <Change />
    <Update flim='MASTER' /> 
    </div>
  );
}

export default App;
