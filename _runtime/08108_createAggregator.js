// === Module 8108: createAggregator ===

// Module 8108 (createAggregator)
import _mod514 from "module_514" /* 514 */;
import baseIteratee from "baseIteratee" /* 595 */;
import arrayAggregator from "arrayAggregator" /* 8109 */;
import baseAggregator from "baseAggregator" /* 8110 */;


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