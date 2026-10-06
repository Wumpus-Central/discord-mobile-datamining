// === Module 5008: isFlattenable ===

// Module 5008 (isFlattenable)
import _mod514 from "module_514" /* 514 */;
import _mod523 from "module_523" /* 523 */;
import baseIsArguments from "baseIsArguments" /* 533 */;

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
};