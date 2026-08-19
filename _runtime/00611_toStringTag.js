// === Module 611: toStringTag ===

// Module 611 (toStringTag)
import _mod608 from "module_608" /* 608 */;

({ hasOwnProperty: c0, toString: closure_1 } = Object.prototype);
let toStringTag;
if (_mod608) {
  toStringTag = _mod608.toStringTag;
}

export default function getRawTag(arg0) {
  let tmp = closure_0;
  const call = closure_0.call;
  if (typeof call === "unknown") {
    tmp(toStringTag);
  } else {
    call(arg0, toStringTag);
  }
  tmp = arg0[toStringTag];
};