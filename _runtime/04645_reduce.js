// === Module 4645: reduce ===

// Module 4645 (reduce)
import _mod596 from "module_596" /* 596 */;
import baseForOwn from "baseForOwn" /* 598 */;
import baseIteratee from "baseIteratee" /* 717 */;


export default function reduce(arg0, arg1, arg2) {
  if (_mod596(arg0)) {
    let tmpResult = tmp(4646);
  } else {
    tmpResult = tmp(4647);
  }
  return tmpResult(arg0, baseIteratee(arg1, 4), arg2, arguments.length < 3, baseForOwn);
};