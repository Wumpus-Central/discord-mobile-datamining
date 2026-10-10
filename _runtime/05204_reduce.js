// === Module 5204: reduce ===

// Module 5204 (reduce)
import _mod514 from "module_514" /* 514 */;
import baseForOwn from "baseForOwn" /* 516 */;
import baseIteratee from "baseIteratee" /* 595 */;
import arrayReduce from "arrayReduce" /* 5205 */;
import baseReduce from "baseReduce" /* 5206 */;


export default function reduce(arg0, arg1, arg2) {
  if (_mod514(arg0)) {
    let tmpResult = arrayReduce;
  } else {
    tmpResult = baseReduce;
  }
  return tmpResult(arg0, baseIteratee(arg1, 4), arg2, arguments.length < 3, baseForOwn);
};