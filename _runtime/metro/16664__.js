// === Module 16664: ? ===

// Module 16664
import _mod16647 from "module_16647" /* 16647 */;
import _mod16665 from "module_16665" /* 16665 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod16665(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp6 = _mod16647(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = _mod16647(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};