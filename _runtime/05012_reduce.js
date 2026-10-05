// _runtime/05012_reduce.js
import _mod514 from "metro/00514__.js";
import createBaseEach from "00516_createBaseEach.js";
import baseIteratee from "00595_baseIteratee.js";
import arrayReduce from "05013_arrayReduce.js";
import baseReduce from "05014_baseReduce.js";

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
}
