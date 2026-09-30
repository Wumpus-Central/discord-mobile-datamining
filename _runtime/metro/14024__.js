// === Module 14024: ? ===

// Module 14024
import _mod14007 from "module_14007" /* 14007 */;
import _mod14025 from "module_14025" /* 14025 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod14025(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp6 = _mod14007(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = _mod14007(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};