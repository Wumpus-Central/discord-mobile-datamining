// _runtime/13364_shallowCompare.js
import { shallowEqual } from "13365_shallowEqual.js";

export default function shallowCompare(props) {
  const tmp3 = shallowEqual(props.props, arg1);
  let tmp4 = !tmp3;
  if (tmp3) {
    tmp4 = !shallowEqual(props.state, arg2);
  }
  return tmp4;
};