// === Module 15585: ? ===

// Module 15585
import _mod15568 from "module_15568" /* 15568 */;
import _mod15586 from "module_15586" /* 15586 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod15586(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp6 = _mod15568(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = _mod15568(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};