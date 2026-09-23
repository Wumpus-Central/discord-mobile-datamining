// === Module 14703: ? ===

// Module 14703
import _mod14686 from "module_14686" /* 14686 */;
import _mod14704 from "module_14704" /* 14704 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod14704(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp6 = _mod14686(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = _mod14686(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};