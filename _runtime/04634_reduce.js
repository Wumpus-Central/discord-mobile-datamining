// === Module 4634: reduce ===

// Module 4634 (reduce)
import _mod599 from "module_599" /* 599 */;
import baseForOwn from "baseForOwn" /* 601 */;
import baseIteratee from "baseIteratee" /* 720 */;


export default function reduce(arg0, arg1, arg2) {
  if (_mod599(arg0)) {
    let tmpResult = tmp(4635);
  } else {
    tmpResult = tmp(4636);
  }
  return tmpResult(arg0, baseIteratee(arg1, 4), arg2, arguments.length < 3, baseForOwn);
};