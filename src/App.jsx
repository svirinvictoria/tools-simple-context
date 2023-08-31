import ComponentA from "./components/ComponentA/ComponentA";
import SimpleCtx from "./context/context-simple";

import "./App.css";
import { useState } from "react";

function App() {
  const [simpleGlobal, setSimpleGlobal] = useState("empty");

  const funcGlobal = (parForSimple) => {
    console.log("funcGlobal1 is done");
    setSimpleGlobal(parForSimple);
  };

  return (
    // a provider vor context-simple component. 
    //gives values to the keys that were created in context-simple component
    <SimpleCtx.Provider
      value={{
        simple: simpleGlobal,//state from App.jsx component(row 8)
        changeSimple1: funcGlobal,//POINTER (row 10). changing first function from context-simple component
        changeSimple2: (parForSimple2) => {//INLINE FUNCTION. changing second function from context-simple component
          console.log("funcGlobal2 is done");
          setSimpleGlobal(parForSimple2);
        }
      }}
    >
      <div className="App">
        <h1>Context</h1>
        <ComponentA />
        {/* button with onClick method. pushing a button calls the inline function 
        and changes the simpleGlobal state. */}
        <button onClick={() => {setSimpleGlobal("global from app")}}>
          Change Global without context
        </button> 
      </div>
    </SimpleCtx.Provider>
  );
}

export default App;
