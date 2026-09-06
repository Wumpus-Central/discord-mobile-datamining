// === Module 8434: baseAggregator ===

// Module 8434 (baseAggregator)
import baseForOwn from "baseForOwn" /* 516 */;


export default function baseAggregator(arg0, arg1, arg2, arg3) {
  closure_0 = arg1;
  closure_1 = arg2;
  closure_2 = arg3;
  baseForOwn(arg0, (arg0, arg1, arg2) => {
    closure_0(closure_2, arg0, closure_1(arg0), arg2);
  });
  return arg3;
};