// === Module 14950: ? ===

// Module 14950
import _mod14933 from "module_14933" /* 14933 */;
import _mod14951 from "module_14951" /* 14951 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod14951(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp6 = _mod14933(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = _mod14933(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};