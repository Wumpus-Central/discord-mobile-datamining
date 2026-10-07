// === Module 14130: ? ===

// Module 14130
import _mod14128 from "module_14128" /* 14128 */;


export default (arg0, arg1) => {
  const tmp = _mod14128(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};