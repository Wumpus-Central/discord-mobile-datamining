// === Module 14568: ? ===

// Module 14568
import _mod14551 from "module_14551" /* 14551 */;
import _mod14569 from "module_14569" /* 14569 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod14569(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp6 = _mod14551(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = _mod14551(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};