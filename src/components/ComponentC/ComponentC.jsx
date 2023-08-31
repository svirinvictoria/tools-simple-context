import { useContext } from "react";
import SimpleCtx from "../../context/context-simple";

function ComponentC() {
//useContext hook
  const ctx = useContext(SimpleCtx);

  return (
    <div className="component">
      <h2>ComponentC</h2>
      {/* Context-hook goes to App.jsx and prints a state. 
      It calls a key "simple" whose value is "simpleGlobal" state*/}
      <div>{ctx.simple}</div>
    </div>
  );
}

export default ComponentC;
