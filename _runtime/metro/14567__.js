// === Module 14567: ? ===

// Module 14567
import _mod14565 from "module_14565" /* 14565 */;


export default (arg0, arg1) => {
  const tmp = _mod14565(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};