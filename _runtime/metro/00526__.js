// _runtime/metro/00526__.js
import _mod523 from "00523__.js";

({ hasOwnProperty: closure_0, toString: closure_1 } = Object.prototype);
let toStringTag;
if (_mod523) {
  toStringTag = _mod523.toStringTag;
}

export default function getRawTag(arg0) {
  let tmp = React;
  const call = React.call;
  if (typeof call === "unknown") {
    tmp(toStringTag);
  } else {
    call(arg0, toStringTag);
  }
  tmp = arg0[toStringTag];
}
