// _runtime/metro/08432__.js
import _mod514 from "00514__.js";
import baseIteratee from "../00584_baseIteratee.js";

export default function createAggregator(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (arg0, arg1) => {
    if (_mod514(arg0)) {
      let tmpResult = tmp(8433);
    } else {
      tmpResult = tmp(8434);
    }
    return tmpResult(arg0, closure_0, baseIteratee(arg1, 2), closure_1 ? closure_1() : {});
  };
}
