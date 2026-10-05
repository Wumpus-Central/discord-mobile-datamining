// _runtime/00513_forEach.js
import _mod514 from "metro/00514__.js";
import arrayEach from "00515_arrayEach.js";
import createBaseEach from "00516_createBaseEach.js";
import castFunction from "00548_castFunction.js";

export default function forEach(arg0, arg1) {
  let tmpResult;
  if (_mod514(arg0)) {
    tmpResult = arrayEach;
  } else {
    tmpResult = createBaseEach;
  }
  return tmpResult(arg0, castFunction(arg1));
}
