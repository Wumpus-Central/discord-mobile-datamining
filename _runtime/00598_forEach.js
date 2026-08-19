// _runtime/00598_forEach.js
import _mod599 from "metro/00599__.js";
import arrayEach from "00600_arrayEach.js";
import baseForOwn from "00601_baseForOwn.js";
import castFunction from "00633_castFunction.js";


export default function forEach(arg0, arg1) {
  if (_mod599(arg0)) {
    let tmpResult = arrayEach;
  } else {
    tmpResult = baseForOwn;
  }
  return tmpResult(arg0, castFunction(arg1));
};