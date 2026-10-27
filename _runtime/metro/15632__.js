// === Module 15632: ? ===

// Module 15632
import _mod15630 from "module_15630" /* 15630 */;


export default (arg0, arg1) => {
  const tmp = _mod15630(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};