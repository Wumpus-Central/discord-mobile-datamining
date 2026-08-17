// _runtime/04624_isConcatSpreadable.js
import _mod599 from "module_599" /* 599 */;
import _mod608 from "module_608" /* 608 */;
import baseIsArguments from "baseIsArguments" /* 618 */;

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