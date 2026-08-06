// _runtime/13350_shallowCompare.js
import { shallowEqual } from "13351_shallowEqual.js";

export default function shallowCompare(props) {
  const tmp3 = shallowEqual(props.props, arg1);
  let tmp4 = !tmp3;
  if (tmp3) {
    tmp4 = !shallowEqual(props.state, arg2);
  }
  return tmp4;
};