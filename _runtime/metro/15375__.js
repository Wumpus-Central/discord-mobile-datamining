// === Module 15375: ? ===

// Module 15375
import _mod15373 from "module_15373" /* 15373 */;


export default (arg0, arg1) => {
  const tmp = _mod15373(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};