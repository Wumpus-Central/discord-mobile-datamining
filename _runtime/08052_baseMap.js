// _runtime/08052_baseMap.js
import { baseForOwn } from "00601_baseForOwn.js";
import { isArrayLike } from "00603_isArrayLike.js";

export default function baseMap(arg0, arg1) {
  const _require = arg1;
  dependencyMap = -1;
  if (_isArrayLike(arg0)) {
    const _Array = Array;
    let ArrayResult = Array(arg0.length);
  } else {
    ArrayResult = [];
  }
  closure_2 = ArrayResult;
  _baseForOwn(arg0, (arg0, arg1, arg2) => {
    const sum = c1 + 1;
    c1 = sum;
    closure_2[sum] = callback(arg0, arg1, arg2);
  });
  return ArrayResult;
};