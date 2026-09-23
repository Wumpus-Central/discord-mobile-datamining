// === Module 14714: ? ===

// Module 14714
import _mod14712 from "module_14712" /* 14712 */;


export default (arg0, arg1) => {
  const tmp = _mod14712(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};