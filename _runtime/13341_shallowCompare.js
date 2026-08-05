import { shallowEqual } from "13342_shallowEqual.js";
// _runtime/13341_shallowCompare.js

export default function shallowCompare(props) {
  const tmp3 = shallowEqual /* shallowEqual */(props.props, arg1);
  let tmp4 = !tmp3;
  if (tmp3) {
    tmp4 = !shallowEqual /* shallowEqual */(props.state, arg2);
  }
  return tmp4;
};