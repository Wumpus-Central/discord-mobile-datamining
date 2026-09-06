// === Module 4681: reduce ===

// Module 4681 (reduce)
import _mod514 from "module_514" /* 514 */;
import baseForOwn from "baseForOwn" /* 516 */;
import baseIteratee from "baseIteratee" /* 584 */;


export default function reduce(arg0, arg1, arg2) {
  if (_mod514(arg0)) {
    let tmpResult = tmp(4682);
  } else {
    tmpResult = tmp(4683);
  }
  return tmpResult(arg0, baseIteratee(arg1, 4), arg2, arguments.length < 3, baseForOwn);
};