// === Module 13782: ? ===

// Module 13782
import _mod13780 from "module_13780" /* 13780 */;


export default (arg0, arg1) => {
  const tmp = _mod13780(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};