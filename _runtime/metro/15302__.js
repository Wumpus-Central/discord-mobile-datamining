// === Module 15302: ? ===

// Module 15302
import _mod15300 from "module_15300" /* 15300 */;


export default (arg0, arg1) => {
  const tmp = _mod15300(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};