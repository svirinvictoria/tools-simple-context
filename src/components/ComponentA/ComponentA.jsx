import ComponentB from '../ComponentB/ComponentB';
import { useContext } from "react";
import SimpleCtx from "../../context/context-simple";

function ComponentA() {

  //useContext Hook connecting this component with context-simple component.
  //de-facto going to the App.jsx component.
    const ctx = useContext(SimpleCtx);

  return (
    <div className="component">
      <h2>ComponentA</h2>
     <ComponentB />
     {/* button connected to the context-simple component through useContext HOOK .
      De-facto goes to the App.jsx component and calls function changeSimple2*/}
     <button onClick={() => {ctx.changeSimple2("Jopa")}}> 
        Do
    </button>
    </div>
  );
}

export default ComponentA;
