// _runtime/13444_shallowCompare.js
import { shallowEqual } from "13445_shallowEqual.js";

export default function shallowCompare(props) {
  const tmp3 = shallowEqual(props.props, arg1);
  let tmp4 = !tmp3;
  if (tmp3) {
    tmp4 = !shallowEqual(props.state, arg2);
  }
  return tmp4;
};