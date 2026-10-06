// _runtime/05008_isFlattenable.js
import _mod514 from "metro/00514__.js";
import _mod523 from "metro/00523__.js";
import baseIsArguments from "00533_baseIsArguments.js";

let isConcatSpreadable;
if (_mod523) {
  isConcatSpreadable = _mod523.isConcatSpreadable;
}

export default function isFlattenable(arg0) {
  let tmp3 = _mod514(arg0) || baseIsArguments(arg0);
  if (!tmp3) {
    tmp3 = isConcatSpreadable && arg0 && arg0[isConcatSpreadable];
    const tmp5 = isConcatSpreadable && arg0 && arg0[isConcatSpreadable];
  }
  return tmp3;
}
