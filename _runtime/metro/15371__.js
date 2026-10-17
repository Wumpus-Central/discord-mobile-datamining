// === Module 15371: ? ===

// Module 15371
import _mod15369 from "module_15369" /* 15369 */;


export default (arg0, arg1) => {
  const tmp = _mod15369(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};