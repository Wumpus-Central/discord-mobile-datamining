// _runtime/06163_reduce.js
import _mod514 from "metro/00514__.js";
import baseForOwn from "00516_baseForOwn.js";
import baseIteratee from "00583_baseIteratee.js";
import arrayReduce from "06164_arrayReduce.js";
import baseReduce from "06165_baseReduce.js";

export default function reduce(arg0, arg1, arg2) {
  if (_mod514(arg0)) {
    let tmpResult = arrayReduce;
  } else {
    tmpResult = baseReduce;
  }
  return tmpResult(arg0, baseIteratee(arg1, 4), arg2, arguments.length < 3, baseForOwn);
}
