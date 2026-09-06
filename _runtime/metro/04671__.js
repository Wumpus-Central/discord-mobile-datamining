// _runtime/metro/04671__.js
import _mod514 from "00514__.js";
import _mod523 from "00523__.js";
import baseIsArguments from "../00533_baseIsArguments.js";

let isConcatSpreadable;
if (_mod523) {
  isConcatSpreadable = _mod523.isConcatSpreadable;
}

export default function isFlattenable(arg0) {
  let tmp3 = _mod514(arg0) || baseIsArguments(arg0);
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
