// === Module 16400: ? ===

// Module 16400
import _mod16383 from "module_16383" /* 16383 */;
import _mod16401 from "module_16401" /* 16401 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod16401(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp6 = _mod16383(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = _mod16383(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};