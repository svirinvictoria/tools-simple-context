import ComponentC from '../ComponentC/ComponentC';
import { useContext } from "react";
import SimpleCtx from "../../context/context-simple";

function ComponentB() {

  //useContext Hook connecting this component with context-simple component.
  //de-facto going to the App.jsx component.
  const ctx = useContext(SimpleCtx);

  //button handler. Goes to App.jsx and call function changeSimple1()
  const onButtonClickHandler = (e) => {
    ctx.changeSimple1("Simple From B");
  }

  return (
    <div className="component">
      <h2>ComponentB</h2>

      <button onClick={onButtonClickHandler}>Change Simple</button>

      <ComponentC />
    </div>
  );
}

export default ComponentB;
