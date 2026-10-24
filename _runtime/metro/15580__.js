// === Module 15580: ? ===

// Module 15580
import _mod15563 from "module_15563" /* 15563 */;
import _mod15581 from "module_15581" /* 15581 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod15581(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp6 = _mod15563(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = _mod15563(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};