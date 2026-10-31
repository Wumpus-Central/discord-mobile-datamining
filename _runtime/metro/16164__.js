// === Module 16164: ? ===

// Module 16164
import _mod16147 from "module_16147" /* 16147 */;
import _mod16165 from "module_16165" /* 16165 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod16165(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp6 = _mod16147(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = _mod16147(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};