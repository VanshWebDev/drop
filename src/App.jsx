import { useState, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Form from "./components/Form"
import contextFn from "./Context/Context";
import "./App.css";
import Dropdown from "./components/Dropdown";

function App() {
  const [count, setCount] = useState(0);
  let run = useCallback(() => {
    console.log("usecallback");
    return count;
  }, [count]);
  return (
    <>
    <Dropdown />
      {/* <contextFn.Provider value={count}> */}
        {/* <Navbar name="vansh" runFn={run} /> */}
        {/* <Form/> */}
      {/* </contextFn.Provider> */}
    </>
  );
}

export default App;
