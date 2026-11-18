// === Module 15505: ? ===

// Module 15505
import _mod15488 from "module_15488" /* 15488 */;
import _mod15506 from "module_15506" /* 15506 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod15506(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp6 = _mod15488(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = _mod15488(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};