// === Module 13917: ? ===

// Module 13917
import _mod13915 from "module_13915" /* 13915 */;


export default (arg0, arg1) => {
  const tmp = _mod13915(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};