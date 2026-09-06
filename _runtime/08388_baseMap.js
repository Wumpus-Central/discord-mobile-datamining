// === Module 8388: baseMap ===

// Module 8388 (baseMap)
import baseForOwn from "baseForOwn" /* 516 */;
import _mod518 from "module_518" /* 518 */;


export default function baseMap(arg0, arg1) {
  closure_0 = arg1;
  c1 = -1;
  if (_mod518(arg0)) {
    const _Array = Array;
    let ArrayResult = Array(arg0.length);
  } else {
    ArrayResult = [];
  }
  closure_2 = ArrayResult;
  baseForOwn(arg0, (arg0, arg1, arg2) => {
    const sum = c1 + 1;
    c1 = sum;
    ArrayResult[sum] = closure_0(arg0, arg1, arg2);
  });
  return ArrayResult;
};