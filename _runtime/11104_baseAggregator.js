// _runtime/11104_baseAggregator.js
import { baseForOwn } from "00601_baseForOwn.js";

export default function baseAggregator(arg0, arg1, arg2, arg3) {
  const _require = arg1;
  dependencyMap = arg2;
  closure_2 = arg3;
  baseForOwn(arg0, (arg0, arg1, arg2) => {
    callback(closure_2, arg0, callback2(arg0), arg2);
  });
  return arg3;
};