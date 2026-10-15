// === Module 15257: ? ===

// Module 15257
import _mod15255 from "module_15255" /* 15255 */;


export default (arg0, arg1) => {
  const tmp = _mod15255(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};