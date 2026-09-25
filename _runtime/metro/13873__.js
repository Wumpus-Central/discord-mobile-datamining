// === Module 13873: ? ===

// Module 13873
import _mod13856 from "module_13856" /* 13856 */;
import _mod13874 from "module_13874" /* 13874 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod13874(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp6 = _mod13856(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = _mod13856(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};