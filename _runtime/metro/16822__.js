// === Module 16822: ? ===

// Module 16822
import _mod16805 from "module_16805" /* 16805 */;
import _mod16823 from "module_16823" /* 16823 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod16823(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp6 = _mod16805(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = _mod16805(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};