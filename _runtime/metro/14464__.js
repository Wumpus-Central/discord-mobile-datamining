// === Module 14464: ? ===

// Module 14464
import _mod14462 from "module_14462" /* 14462 */;


export default (arg0, arg1) => {
  const tmp = _mod14462(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};