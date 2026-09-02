// === Module 4635: isConcatSpreadable ===

// Module 4635 (isConcatSpreadable)
import _mod596 from "module_596" /* 596 */;
import _mod605 from "module_605" /* 605 */;
import baseIsArguments from "baseIsArguments" /* 615 */;

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
};