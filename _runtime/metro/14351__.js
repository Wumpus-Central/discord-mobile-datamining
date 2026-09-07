// === Module 14351: ? ===

// Module 14351
import _mod14349 from "module_14349" /* 14349 */;


export default (arg0, arg1) => {
  const tmp = _mod14349(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};