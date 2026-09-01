// === Module 14003: ? ===

// Module 14003
import _mod14001 from "module_14001" /* 14001 */;


export default (arg0, arg1) => {
  const tmp = _mod14001(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};