// === Module 14099: ? ===

// Module 14099
import _mod14082 from "module_14082" /* 14082 */;
import _mod14100 from "module_14100" /* 14100 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod14100(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp6 = _mod14082(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = _mod14082(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};