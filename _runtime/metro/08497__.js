// _runtime/metro/08497__.js
import _mod514 from "00514__.js";
import baseIteratee from "../00584_baseIteratee.js";
import arrayAggregator from "../08498_arrayAggregator.js";
import baseAggregator from "../08499_baseAggregator.js";

export default function createAggregator(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (arg0, arg1) => {
    if (_mod514(arg0)) {
      let tmpResult = arrayAggregator;
    } else {
      tmpResult = baseAggregator;
    }
    return tmpResult(arg0, closure_0, baseIteratee(arg1, 2), closure_1 ? closure_1() : {});
  };
}
