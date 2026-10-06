// === Module 8141: createAggregator ===

// Module 8141 (createAggregator)
import _mod514 from "module_514" /* 514 */;
import baseIteratee from "baseIteratee" /* 595 */;
import arrayAggregator from "arrayAggregator" /* 8142 */;
import baseAggregator from "baseAggregator" /* 8143 */;


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
};