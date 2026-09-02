// _runtime/04635_isConcatSpreadable.js
import _mod596 from "metro/00596__.js";
import _mod605 from "metro/00605__.js";
import baseIsArguments from "00615_baseIsArguments.js";

let isConcatSpreadable;
if (_mod605) {
  isConcatSpreadable = _mod605.isConcatSpreadable;
}

export default function isFlattenable(arg0) {
  let tmp3 = _mod596(arg0) || baseIsArguments(arg0);
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
}
