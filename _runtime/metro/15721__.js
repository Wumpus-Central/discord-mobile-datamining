// === Module 15721: ? ===

// Module 15721
import _mod15704 from "module_15704" /* 15704 */;
import _mod15722 from "module_15722" /* 15722 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod15722(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp6 = _mod15704(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = _mod15704(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};