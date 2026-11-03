// === Module 16311: ? ===

// Module 16311
import _mod16294 from "module_16294" /* 16294 */;
import _mod16312 from "module_16312" /* 16312 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod16312(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp6 = _mod16294(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = _mod16294(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};