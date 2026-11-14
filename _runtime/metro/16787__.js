// === Module 16787: ? ===

// Module 16787
import _mod16770 from "module_16770" /* 16770 */;
import _mod16788 from "module_16788" /* 16788 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod16788(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp6 = _mod16770(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = _mod16770(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};