// === Module 14617: ? ===

// Module 14617
import _mod14600 from "module_14600" /* 14600 */;
import _mod14618 from "module_14618" /* 14618 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod14618(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp6 = _mod14600(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = _mod14600(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};