// === Module 526: getRawTag ===

// Module 526 (getRawTag)
import _mod523 from "module_523" /* 523 */;

let _window;
let map;
({ hasOwnProperty: _window, toString: map } = Object.prototype);
let toStringTag;
if (_mod523) {
  toStringTag = _mod523.toStringTag;
}

export default function getRawTag(arg0) {
  let flag;
  const callResult = React.call(arg0, toStringTag);
  const tmp = arg0;
  const tmp4 = arg0[toStringTag];
  try {
    arg0[toStringTag] = undefined;
    flag = true;
  } catch (err) {
  }
  const callResult1 = map.call(arg0);
  if (flag) {
    if (callResult) {
      arg0[toStringTag] = tmp4;
    } else {
      delete tmp[toStringTag];
    }
  }
  return callResult1;
};