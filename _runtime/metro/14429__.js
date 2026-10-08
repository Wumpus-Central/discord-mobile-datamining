// === Module 14429: ? ===

// Module 14429
import _mod14427 from "module_14427" /* 14427 */;


export default (arg0, arg1) => {
  const tmp = _mod14427(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};