// === Module 15466: ? ===

// Module 15466
import _mod15464 from "module_15464" /* 15464 */;


export default (arg0, arg1) => {
  const tmp = _mod15464(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};