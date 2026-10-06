// === Module 5018: reduce ===

// Module 5018 (reduce)
import _mod514 from "module_514" /* 514 */;
import createBaseEach from "createBaseEach" /* 516 */;
import baseIteratee from "baseIteratee" /* 595 */;
import arrayReduce from "arrayReduce" /* 5019 */;
import baseReduce from "baseReduce" /* 5020 */;


export default function reduce(arg0, arg1, arg2) {
  let tmpResult;
  if (_mod514(arg0)) {
    tmpResult = arrayReduce;
  } else {
    tmpResult = baseReduce;
  }
  const tmp4 = arguments.length < 3;
  const tmp5 = baseIteratee(arg1, 4);
  return tmpResult(arg0, tmp5, arg2, tmp4, createBaseEach);
};