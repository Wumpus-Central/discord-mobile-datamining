// _runtime/04681_reduce.js
import _mod514 from "metro/00514__.js";
import baseForOwn from "00516_baseForOwn.js";
import baseIteratee from "00584_baseIteratee.js";
import arrayReduce from "04682_arrayReduce.js";
import baseReduce from "04683_baseReduce.js";

export default function reduce(arg0, arg1, arg2) {
  if (_mod514(arg0)) {
    let tmpResult = arrayReduce;
  } else {
    tmpResult = baseReduce;
  }
  return tmpResult(arg0, baseIteratee(arg1, 4), arg2, arguments.length < 3, baseForOwn);
}
