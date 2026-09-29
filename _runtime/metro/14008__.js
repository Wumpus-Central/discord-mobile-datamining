// === Module 14008: ? ===

// Module 14008
import _mod14006 from "module_14006" /* 14006 */;


export default (arg0, arg1) => {
  const tmp = _mod14006(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};