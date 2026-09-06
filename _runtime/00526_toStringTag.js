// === Module 526: toStringTag ===

// Module 526 (toStringTag)
import _mod523 from "module_523" /* 523 */;

({ hasOwnProperty: c0, toString: closure_1 } = Object.prototype);
let toStringTag;
if (_mod523) {
  toStringTag = _mod523.toStringTag;
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