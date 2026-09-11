// === Module 14401: ? ===

// Module 14401
import _mod14399 from "module_14399" /* 14399 */;


export default (arg0, arg1) => {
  const tmp = _mod14399(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};