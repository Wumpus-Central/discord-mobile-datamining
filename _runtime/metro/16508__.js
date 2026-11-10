// === Module 16508: ? ===

// Module 16508
import _mod16491 from "module_16491" /* 16491 */;
import _mod16509 from "module_16509" /* 16509 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod16509(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp6 = _mod16491(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = _mod16491(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};