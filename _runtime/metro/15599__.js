// === Module 15599: ? ===

// Module 15599
import _mod15582 from "module_15582" /* 15582 */;
import _mod15600 from "module_15600" /* 15600 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod15600(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp6 = _mod15582(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = _mod15582(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};