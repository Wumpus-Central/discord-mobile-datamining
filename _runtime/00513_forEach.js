// === Module 513: forEach ===

// Module 513 (forEach)
import _mod514 from "module_514" /* 514 */;
import arrayEach from "arrayEach" /* 515 */;
import createBaseEach from "createBaseEach" /* 516 */;
import castFunction from "castFunction" /* 548 */;


export default function forEach(arg0, arg1) {
  let tmpResult;
  if (_mod514(arg0)) {
    tmpResult = arrayEach;
  } else {
    tmpResult = createBaseEach;
  }
  return tmpResult(arg0, castFunction(arg1));
};