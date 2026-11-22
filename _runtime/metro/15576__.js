// === Module 15576: ? ===

// Module 15576
import _mod15559 from "module_15559" /* 15559 */;
import _mod15577 from "module_15577" /* 15577 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod15577(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp6 = _mod15559(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = _mod15559(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};