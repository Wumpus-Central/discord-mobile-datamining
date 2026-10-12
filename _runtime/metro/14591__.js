// === Module 14591: ? ===

// Module 14591
import _mod14574 from "module_14574" /* 14574 */;
import _mod14592 from "module_14592" /* 14592 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod14592(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp6 = _mod14574(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = _mod14574(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};