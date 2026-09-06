// === Module 513: forEach ===

// Module 513 (forEach)
import _mod514 from "module_514" /* 514 */;
import arrayEach from "arrayEach" /* 515 */;
import baseForOwn from "baseForOwn" /* 516 */;
import castFunction from "castFunction" /* 548 */;


export default function forEach(arg0, arg1) {
  if (_mod514(arg0)) {
    let tmpResult = arrayEach;
  } else {
    tmpResult = baseForOwn;
  }
  return tmpResult(arg0, castFunction(arg1));
};