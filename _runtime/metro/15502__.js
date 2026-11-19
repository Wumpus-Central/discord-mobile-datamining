// === Module 15502: ? ===

// Module 15502
import _mod15500 from "module_15500" /* 15500 */;


export default (arg0, arg1) => {
  const tmp = _mod15500(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};