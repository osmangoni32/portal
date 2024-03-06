import { useState } from "react";
import "./App.css";
import ModalContainer from "./portalModal/ModalContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-white text-red-400 ">kUDSHFUSD</h1>
      <ModalContainer/>
    </>
  );
}

export default App;
