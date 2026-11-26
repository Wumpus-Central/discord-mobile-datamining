// === Module 15772: ? ===

// Module 15772
import _mod15755 from "module_15755" /* 15755 */;
import _mod15773 from "module_15773" /* 15773 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod15773(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp6 = _mod15755(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = _mod15755(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};