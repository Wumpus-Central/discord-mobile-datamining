// _runtime/08141_createAggregator.js
import _mod514 from "metro/00514__.js";
import baseIteratee from "00595_baseIteratee.js";
import arrayAggregator from "08142_arrayAggregator.js";
import baseAggregator from "08143_baseAggregator.js";

export default function createAggregator(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0, arg1) => {
    let tmpResult;
    if (_mod514(arg0)) {
      tmpResult = arrayAggregator;
    } else {
      tmpResult = baseAggregator;
    }
    const tmp4 = closure_1 ? closure_1() : {};
    return tmpResult(arg0, closure_0, baseIteratee(arg1, 2), tmp4);
  };
}
