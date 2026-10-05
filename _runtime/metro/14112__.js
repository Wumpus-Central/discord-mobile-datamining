// === Module 14112: ? ===

// Module 14112
import _mod14110 from "module_14110" /* 14110 */;


export default (arg0, arg1) => {
  const tmp = _mod14110(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};