// === Module 14226: ? ===

// Module 14226
import _mod14224 from "module_14224" /* 14224 */;


export default (arg0, arg1) => {
  const tmp = _mod14224(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};