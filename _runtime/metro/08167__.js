// === Module 8167: ? ===

// Module 8167
import _mod514 from "module_514" /* 514 */;
import baseIteratee from "baseIteratee" /* 583 */;
import arrayAggregator from "arrayAggregator" /* 8168 */;
import baseAggregator from "baseAggregator" /* 8169 */;


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
};