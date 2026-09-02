// _runtime/00608_toStringTag.js
import _mod605 from "metro/00605__.js";

({ hasOwnProperty: c0, toString: closure_1 } = Object.prototype);
let toStringTag;
if (_mod605) {
  toStringTag = _mod605.toStringTag;
}

export default function getRawTag(arg0) {
  let tmp = closure_0;
  const call = closure_0.call;
  if (typeof call === "unknown") {
    tmp(tmp2);
  } else {
    call(arg0, tmp2);
  }
  tmp = arg0[tmp2];
}
