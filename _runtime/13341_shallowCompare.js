// _runtime/13341_shallowCompare.js

export default function shallowCompare(props) {
  const tmp3 = require("13342_shallowEqual.js") /* shallowEqual */(props.props, arg1);
  let tmp4 = !tmp3;
  if (tmp3) {
    tmp4 = !require("13342_shallowEqual.js") /* shallowEqual */(props.state, arg2);
  }
  return tmp4;
};