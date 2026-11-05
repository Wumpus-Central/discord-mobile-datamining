// === Module 5993: reduce ===

// Module 5993 (reduce)
import _mod514 from "module_514" /* 514 */;
import baseForOwn from "baseForOwn" /* 516 */;
import baseIteratee from "baseIteratee" /* 583 */;
import arrayReduce from "arrayReduce" /* 5994 */;
import baseReduce from "baseReduce" /* 5995 */;


export default function reduce(arg0, arg1, arg2) {
  if (_mod514(arg0)) {
    let tmpResult = arrayReduce;
  } else {
    tmpResult = baseReduce;
  }
  return tmpResult(arg0, baseIteratee(arg1, 4), arg2, arguments.length < 3, baseForOwn);
};