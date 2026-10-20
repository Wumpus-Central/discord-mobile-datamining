// === Module 15421: ? ===

// Module 15421
import _mod15419 from "module_15419" /* 15419 */;


export default (arg0, arg1) => {
  const tmp = _mod15419(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};