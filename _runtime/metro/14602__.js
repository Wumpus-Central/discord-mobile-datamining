// === Module 14602: ? ===

// Module 14602
import _mod14600 from "module_14600" /* 14600 */;


export default (arg0, arg1) => {
  const tmp = _mod14600(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};