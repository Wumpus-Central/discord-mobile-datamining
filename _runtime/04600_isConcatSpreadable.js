// _runtime/04600_isConcatSpreadable.js
import _mod599 from "metro/00599__.js";
import _mod608 from "metro/00608__.js";
import baseIsArguments from "00618_baseIsArguments.js";

let isConcatSpreadable;
if (_mod608) {
  isConcatSpreadable = _mod608.isConcatSpreadable;
}

export default function isFlattenable(arg0) {
  let tmp3 = _mod599(arg0) || baseIsArguments(arg0);
  if (!tmp3) {
    let tmp5 = isConcatSpreadable;
    if (isConcatSpreadable) {
      tmp5 = arg0;
    }
    if (tmp5) {
      tmp5 = arg0[tmp4];
    }
    tmp3 = tmp5;
    tmp4 = isConcatSpreadable;
  }
  return tmp3;
};