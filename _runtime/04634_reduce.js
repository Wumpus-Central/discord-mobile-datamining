// _runtime/04634_reduce.js
import _mod599 from "metro/00599__.js";
import baseForOwn from "00601_baseForOwn.js";
import baseIteratee from "00720_baseIteratee.js";


export default function reduce(arg0, arg1, arg2) {
  if (_mod599(arg0)) {
    let tmpResult = tmp(4635);
  } else {
    tmpResult = tmp(4636);
  }
  return tmpResult(arg0, baseIteratee(arg1, 4), arg2, arguments.length < 3, baseForOwn);
};