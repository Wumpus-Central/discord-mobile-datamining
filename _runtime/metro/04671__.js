// === Module 4671: ? ===

// Module 4671
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
    let tmp5 = isConcatSpreadable;
    if (isConcatSpreadable) {
      tmp5 = arg0;
    }
    if (tmp5) {
      tmp5 = arg0[isConcatSpreadable];
    }
    tmp3 = tmp5;
  }
  return tmp3;
};