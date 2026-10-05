// _runtime/08064_baseMap.js
import createBaseEach from "00516_createBaseEach.js";
import isArrayLike from "00518_isArrayLike.js";

export default function baseMap(arg0, arg1) {
  let ArrayResult;
  let closure_0 = arg1;
  let sum = -1;
  if (isArrayLike(arg0)) {
    const _Array = Array;
    ArrayResult = Array(arg0.length);
  } else {
    ArrayResult = [];
  }
  createBaseEach(arg0, (arg0, arg1, arg2) => {
    sum = sum + 1;
    ArrayResult[sum] = closure_0(arg0, arg1, arg2);
  });
  return ArrayResult;
}
