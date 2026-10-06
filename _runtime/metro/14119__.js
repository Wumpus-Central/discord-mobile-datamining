// === Module 14119: ? ===

// Module 14119
import _mod14102 from "module_14102" /* 14102 */;
import _mod14120 from "module_14120" /* 14120 */;
import defineProperty2 from "defineProperty2" /* 14133 */;


export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod14120(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp5 = _mod14102(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && _mod14102(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};