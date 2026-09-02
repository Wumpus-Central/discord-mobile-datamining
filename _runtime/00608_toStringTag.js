// === Module 608: toStringTag ===

// Module 608 (toStringTag)
import _mod605 from "module_605" /* 605 */;

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
};