// === Module 14101: ? ===

// Module 14101
import _mod14084 from "module_14084" /* 14084 */;
import _mod14102 from "module_14102" /* 14102 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod14102(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp6 = _mod14084(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = _mod14084(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};