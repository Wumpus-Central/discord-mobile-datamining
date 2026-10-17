// === Module 5303: reduce ===

// Module 5303 (reduce)
import _mod514 from "module_514" /* 514 */;
import baseForOwn from "baseForOwn" /* 516 */;
import baseIteratee from "baseIteratee" /* 595 */;
import arrayReduce from "arrayReduce" /* 5304 */;
import baseReduce from "baseReduce" /* 5305 */;


export default function reduce(arg0, arg1, arg2) {
  if (_mod514(arg0)) {
    let tmpResult = arrayReduce;
  } else {
    tmpResult = baseReduce;
  }
  return tmpResult(arg0, baseIteratee(arg1, 4), arg2, arguments.length < 3, baseForOwn);
};