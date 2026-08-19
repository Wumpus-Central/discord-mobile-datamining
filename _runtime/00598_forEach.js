// === Module 598: forEach ===

// Module 598 (forEach)
import _mod599 from "module_599" /* 599 */;
import arrayEach from "arrayEach" /* 600 */;
import baseForOwn from "baseForOwn" /* 601 */;
import castFunction from "castFunction" /* 633 */;


export default function forEach(arg0, arg1) {
  if (_mod599(arg0)) {
    let tmpResult = arrayEach;
  } else {
    tmpResult = baseForOwn;
  }
  return tmpResult(arg0, castFunction(arg1));
};