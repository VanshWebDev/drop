import { useContext } from "react";
import contextFn from "../Context/Context";

const Component1 = () => {
  let a = useContext(contextFn);
  return <div>Component{a}</div>;
};

export default Component1;
