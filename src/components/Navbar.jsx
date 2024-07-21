import Component1 from "./Component1";
import { memo } from "react";
const Navbar = ({ name, runFn }) => {
  return (
    <>
      <div>
        <button onClick={()=>runFn()}>Run{runFn()}</button>
        my name is {name} <Component1 />
      </div>
    </>
  );
};

export default memo(Navbar);
